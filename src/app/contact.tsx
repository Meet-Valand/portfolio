export default function Contact() {
  return (
    <div
      draggable="false"
      className="w-full h-13 bg-[#1B1919] flex items-center justify-between px-10 py-3  selection:bg-white selection:text-black"
    >
      <a
        href="https://github.com/Meet-Valand"
        target="_blank"
        className="text-white "
      >
        GitHub
      </a>
      <a href="mailto:meet.valand.dev@gmail.com" className="text-white ">
        meet.valand.dev@gmail.com
      </a>
      <a
        href="https://linkedin.com/in/your-linkedin"
        target="_blank"
        className="text-white"
      >
        LinkedIn
      </a>
    </div>
  );
}
