interface CostCalculatorProps {
  totalCost: number;
}

export default function ShowTotalCost({ totalCost }: CostCalculatorProps) {
  return (
    <div className="p-2 flex flex-row space-x-1 items-center">
      <img src="/assets/image/total-cost.png" alt="" className="size-13" />
      <div className="flex flex-col items-center">
        <span className="font-tab text-xl font-bold text-[#8FA557]">
          {totalCost}
        </span>
        <span className="font-tab text-sm text-[#8FA557]">Total Cost</span>
      </div>
    </div>
  );
}
