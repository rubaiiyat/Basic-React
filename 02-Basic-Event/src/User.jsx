export default function User({ user }) {
  const { name, email, phone } = user;
  return (
    <>
      <div className="border border-green-500 p-10 w-96 text-start rounded-2xl">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </>
  );
}
