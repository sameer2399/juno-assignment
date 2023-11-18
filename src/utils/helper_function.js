export const checkRiskLevelStatus = (riskLevel) => {
  switch (riskLevel) {
    case "Medium":
      return {
        color: "#88670F",
      };
    case "High":
      return {
        color: "#7D2424",
      };

    case "Low":
      return {
        color: "#006540",
      };
  }
};
