import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="py-6 md:py-12 container mx-auto px-3 xl:px-[72px]">
      <Link href="/">
        <button className="btn btn-sm gap-2 text-sm normal-case px-6 text-primary-content bg-secondary hover:!bg-secondary border-none shadow-[0_0_7px_1px_rgba(0,0,0,0.2)]">
          <Icon icon="gg:arrow-left" className="h-5 w-5" />
          Back
        </button>
      </Link>
    </div>
  );
};

export default Detail;
