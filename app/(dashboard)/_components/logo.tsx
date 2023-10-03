import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <Image height={40} width={40} alt="logo" src="/logo.svg" />
      <h1 className="text-xl font-semibold text-[#5454D4]">Xaama</h1>
    </div>
  );
};
