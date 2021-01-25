const url = `https://${process.env.LH_USER}:${process.env.LH_PASSWORD}@lighthouse-ci.staging.quinpress.com/`;
// const collectUrls = [
//   "https://malibu-qa-web.qtstage.io",
//   "https://malibu-perf.quintype.io/?uptime",
//   "https://malibu-web.qtstage.io",
//   "https://malibu-web.quintype.io"
// ];
let minScore = 0.9;
if (process.env.LHCI_SITES[0].includes("perf")) {
  minScore = 0.75;
} else if (process.env.LHCI_SITES[0].includes("staging")) {
  minScore = 0.85;
}
const lhciConfig = {
  ci: {
    collect: {
      url: JSON.parse(process.env.LHCI_SITES),
      settings: {
        emulatedFormFactor: "mobile"
      }
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: minScore }]
      }
    },
    upload: {
      target: "lhci",
      serverBaseUrl: url,
      token: `${process.env.LH_BUILD_TOKEN}`
    }
  }
};

module.exports = lhciConfig;
