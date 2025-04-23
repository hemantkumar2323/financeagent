import React, { useState } from 'react';

export default function FinanceAgent() {
  const [financeData, setFinanceData] = useState({
    totalRevenue: 870000,
    totalAdSpend: 238000,
    netProfit: 560000,
    breakevenROAS: 1.6,
    currentROAS: 3.2,
    gstThisMonth: 11200,
    riskAlert: false
  });

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📊 FinanceAgent — Profit, Spend & GST Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
        <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
          <h3>Total Revenue</h3>
          <p>₹{financeData.totalRevenue.toLocaleString()}</p>
        </div>

        <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
          <h3>Total Ad Spend</h3>
          <p>₹{financeData.totalAdSpend.toLocaleString()}</p>
        </div>

        <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
          <h3>Net Profit</h3>
          <p>₹{financeData.netProfit.toLocaleString()}</p>
        </div>

        <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
          <h3>Current ROAS</h3>
          <p>{financeData.currentROAS}x</p>
        </div>

        <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
          <h3>Breakeven ROAS</h3>
          <p>{financeData.breakevenROAS}x</p>
        </div>

        <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
          <h3>GST This Month</h3>
          <p>₹{financeData.gstThisMonth.toLocaleString()}</p>
        </div>
      </div>

      {financeData.riskAlert && (
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#ffe6e6', border: '1px solid #cc0000' }}>
          <strong>⚠️ RISK ALERT:</strong> ROAS is dropping below breakeven. Recommend reducing spend or pivoting creatives.
        </div>
      )}
    </div>
  );
}
