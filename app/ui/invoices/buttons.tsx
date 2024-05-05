import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


import { deleteInvoice } from '@/app/lib/actions';

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
    <button className="rounded-md border p-2 hover:bg-gray-100">
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-4" />
    </button>
  </form>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
    href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

