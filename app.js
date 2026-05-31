
            const assets = [
                {name: "Bitcoin", val: "$58,400", share: "60%"},
                {name: "Ethereum", val: "$3,120", share: "30%"},
                {name: "Solana", val: "$145", share: "10%"}
            ];
            const grid = document.getElementById('crypto-assets');
            assets.forEach(a => {
                const card = document.createElement('div');
                card.className = 'asset-card';
                card.innerHTML = `<div>${a.name}</div><div style="font-size:20px; font-weight:bold; color:var(--accent); margin: 6px 0;">${a.val}</div><div style="font-size:12px; color:var(--text-muted);">${a.share} Alloc</div>`;
                grid.appendChild(card);
            });
        