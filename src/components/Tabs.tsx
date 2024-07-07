export default function Tabs() {
  return (
    <div className="">
      <div className="flex justify-start space-x-5">
        <button className="rounded-[32px] px-[44px] hover:shadow-sm py-1 border hover:bg-secondary text-primary">
          All
        </button>
        <button className="rounded-[32px] px-[44px] hover:shadow-sm py-1 border hover:bg-secondary text-primary">
          UI/UX
        </button>
        <button className="rounded-[32px] px-[44px] hover:shadow-sm py-1 border hover:bg-secondary text-primary">
          Graphic Design
        </button>
        <button className="rounded-[32px] px-[44px] hover:shadow-sm py-1 border hover:bg-secondary text-primary">
          Branding
        </button>
        <button className="rounded-[32px] px-[44px] hover:shadow-sm py-1 border hover:bg-secondary text-primary">
          Archive
        </button>
      </div>
    </div>
  );
}
