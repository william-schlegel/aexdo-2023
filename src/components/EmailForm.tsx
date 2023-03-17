function EmailForm() {
  return (
    <form className="relative">
      <input
        className="px-8 py-4 w-full rounded-full"
        placeholder="Entrez votre email"
      />
      <button
        className="bg-aexdo text-aexdo-content rounded-full p-4 grid place-items-center absolute right-0 top-0 h-full aspect-square"
        aria-label="Envoyer un email pour être recontacté"
      >
        <i className="bx bx-right-arrow-alt" />
      </button>
    </form>
  );
}
export default EmailForm;
