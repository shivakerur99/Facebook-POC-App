const reportWebVitals = async () => {
  const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
  getCLS(console.log);
  getFID(console.log);
  getFCP(console.log);
  getLCP(console.log);
  getTTFB(console.log);
};

export default reportWebVitals;
