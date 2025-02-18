import { getActiveSaleByCouponCode } from "@/sanity/lib/sale/getActiveSaleByCouponCode";

async function BlackFridayBanner() {
  const sale = await getActiveSaleByCouponCode("BFRIDAY");

  return <div>black Fridav banner</div>;
}

export default BlackFridayBanner;
