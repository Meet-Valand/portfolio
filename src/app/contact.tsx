export default function Contact() {
  return (
    <div className="w-full bg-[#1B1919] flex flex-col sm:flex-row items-center justify-center gap-4 px-6 py-6 text-center selection:bg-white selection:text-black">
      <a
        href="https://github.com/Meet-Valand"
        target="_blank"
        className="text-white hover:underline"
      >
        GitHub
      </a>
      <a
        href="mailto:meet.valand.dev@gmail.com"
        className="text-white hover:underline"
      >
        meet.valand.dev@gmail.com
      </a>
      <a
        href="https://linkedin.com/in/your-linkedin"
        target="_blank"
        className="text-white hover:underline"
      >
        LinkedIn
      </a>
    </div>
  );
}
