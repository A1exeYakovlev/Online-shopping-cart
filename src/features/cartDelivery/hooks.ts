import { useLoaderData } from "react-router";
import { ShopDataBase, PickPointData } from "../../shared.types";

export function usePickpoint(pickpointId: number): PickPointData | undefined {
  const { shopData } = useLoaderData<ShopDataBase>();

  const pickpoints = shopData.pickpoints;
  const pickpointsMap = new Map(
    pickpoints.map((point) => [point.pickPointId, point]),
  );
  const pickpointData = pickpointsMap.get(pickpointId);
  return pickpointData;
}
