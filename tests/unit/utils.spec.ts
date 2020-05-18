import { isRecent } from "@/utils/index";

describe("Utils", () => {
  describe("isRecent", () => {
    it("returns false if date is null", () => {
      expect(isRecent(null, 1)).toEqual(false);
      expect(isRecent(null, 7)).toEqual(false);
    });

    it("returns true if given date is older than given days", () => {
      expect(isRecent(`${Date.now() - 2 * 86400000}`, 1)).toEqual(false);
      expect(isRecent(`${Date.now() - 8 * 86400000}`, 7)).toEqual(false);
    });

    it("returns true if date is recent than given days", () => {
      expect(isRecent(`${Date.now() - 0.5 * 86400000}`, 1)).toEqual(false);
      expect(isRecent(`${Date.now() - 6 * 86400000}`, 7)).toEqual(false);
    });
  });
});
