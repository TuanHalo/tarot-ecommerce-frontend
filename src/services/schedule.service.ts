import { api, SCHEDULE_API } from "@/config/api";

export const scheduleService = {
  getSchedule(consultantId: string, productId: string) {
    return api.get(`${SCHEDULE_API}/${consultantId}/${productId}`);
  },
};
