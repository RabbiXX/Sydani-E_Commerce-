export default function PaymentSuccessfulPage() {
  return (
    <main>
      <div className="flex flex-col p-4 items-center justify-center bg-white w-full min-h-screen">
        <img src="/images/success-pay.png" alt="" />
        <a className="text-xl mt-4 underline text-slate-500" href="/home">Return Home</a>
      </div>
    </main>
  );
}