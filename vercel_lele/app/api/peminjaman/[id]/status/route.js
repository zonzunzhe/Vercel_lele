import { NextResponse } from 'next/server';
import { BORROW_STATUS, isValidStatusTransition } from '@/lib/status-rules';

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { nextStatus, reason, userRole } = body;

    const currentStatus = BORROW_STATUS.PENDING;

    if (!isValidStatusTransition(currentStatus, nextStatus)) {
      return NextResponse.json(
        { message: `Transisi status dari ${currentStatus} ke ${nextStatus} tidak valid.` },
        { status: 400 }
      );
    }

    if (nextStatus === BORROW_STATUS.CANCELLED && userRole !== 'USER') {
      return NextResponse.json(
        { message: 'Hanya peminjam yang bisa membatalkan pengajuan.' },
        { status: 403 }
      );
    }

    const adminOnlyStatus = [
      BORROW_STATUS.APPROVED,
      BORROW_STATUS.REJECTED,
      BORROW_STATUS.BORROWED,
      BORROW_STATUS.RETURNED,
    ];

    if (adminOnlyStatus.includes(nextStatus) && userRole !== 'ADMIN') {
      return NextResponse.json(
        { message: 'Hanya Admin yang bisa melakukan tindakan ini.' },
        { status: 403 }
      );
    }

    if (nextStatus === BORROW_STATUS.REJECTED && !reason) {
      return NextResponse.json(
        { message: 'Alasan penolakan wajib diisi.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Status peminjaman ${id} berhasil diubah menjadi ${nextStatus}`,
      data: {
        id,
        status: nextStatus,
        rejectReason: nextStatus === BORROW_STATUS.REJECTED ? reason : null,
        updatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Terjadi kesalahan pada server.' },
      { status: 500 }
    );
  }
}