var APP_DATA = {
    tanggalUpdate: "06 November 2026",
    
    // --- DATA NO. 1: KOMPOSISI ---
    histBulan: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sept','Okt','Nov'],
    histKomposisi: [
        {q:'I', b:'Jan', ssi:454, jst:4336, glo:333, dika:60, total:5183, diff:-62},
        {q:'I', b:'Feb', ssi:447, jst:4583, glo:332, dika:51, total:5413, diff:230},
        {q:'I', b:'Mar', ssi:519, jst:4687, glo:332, dika:53, total:5591, diff:178},
        {q:'II', b:'April', ssi:515, jst:4479, glo:332, dika:58, total:5384, diff:-207},
        {q:'II', b:'Mei', ssi:514, jst:4478, glo:332, dika:47, total:5371, diff:-13},
        {q:'II', b:'Juni', ssi:514, jst:4468, glo:332, dika:45, total:5359, diff:-12},
        {q:'III', b:'Juli', ssi:521, jst:4460, glo:332, dika:41, total:5354, diff:-5},
        {q:'III', b:'Agustus', ssi:523, jst:4509, glo:332, dika:41, total:5405, diff:51},
        {q:'III', b:'September', ssi:528, jst:4574, glo:332, dika:41, total:5475, diff:70},
        {q:'IV', b:'Oktober', ssi:535, jst:4651, glo:332, dika:41, total:5559, diff:84},
        {q:'IV', b:'November', ssi:534, jst:4610, glo:332, dika:41, total:5517, diff:-42}
    ],

    // --- DATA NO. 2 & 3: GAJI & RKAP ---
    histGaji: [28618, 30028, 31252, 30036, 29928, 29878, 29980, 30363, 30681, 31322, 30923],
    histRkapAng: [30422, 30422, 30422, 30422, 30422, 30422, 30422, 30422, 30422, 30422, 30422],
    histRkapDiff: [1804, 394, -829, 386, 495, 545, 443, 59, -258, -899, -501],

    // --- DATA NO. 4: KOMPENSASI ---
    kompensasi: [
        { no: 1, prog: 'Kompensasi', bln: 'November', unit: 'SSI', org: 1, rp: 4932640, ket: 'Kompensasi Akhir Masa Kontrak Oktober (Jeda) - PB (1x Upah)', tgl: '13/11/2026', status: 'On-Progress' },
        { no: 1, prog: 'Kompensasi', bln: 'November', unit: 'SSI', org: 41, rp: 326057511, ket: 'Kompensasi Akhir Masa Kontrak Oktober-2026 (MK-1 Th)', tgl: '20/11/2026', status: 'On-Progress' },
        { no: 1, prog: 'Kompensasi', bln: 'November', unit: 'JST', org: 142, rp: 523555732, ket: 'Kompensasi Akhir Masa Kontrak Oktober (Jeda) - PB (1x Upah)', tgl: '13/11/2026', status: 'On-Progress' },
        { no: 1, prog: 'Kompensasi', bln: 'November', unit: 'JST', org: 9, rp: 46919885, ket: 'Kompensasi Akhir Masa Kontrak Oktober-2026 (MK-1 Th)', tgl: '20/11/2026', status: 'On-Progress' }
    ],

    // --- DATA NO. 5: PKWT ---
    pkwtRegion: [
        { reg:'PUSAT', total:34, done:20, prog:14, pDone:'58,82%', pProg:'41,18%' },
        { reg:'REG-1', total:127, done:0, prog:127, pDone:'0,00%', pProg:'100,00%' },
        { reg:'REG-2', total:150, done:0, prog:150, pDone:'0,00%', pProg:'100,00%' },
        { reg:'REG-3', total:321, done:33, prog:288, pDone:'10,28%', pProg:'89,72%' },
        { reg:'REG-4', total:144, done:18, prog:126, pDone:'12,50%', pProg:'87,50%' },
        { reg:'REG-5', total:110, done:0, prog:110, pDone:'0,00%', pProg:'100,00%' },
        { reg:'REG-6', total:126, done:0, prog:126, pDone:'0,00%', pProg:'100,00%' },
        { reg:'REG-7', total:177, done:0, prog:177, pDone:'0,00%', pProg:'100,00%' },
        { reg:'REG-8', total:62, done:0, prog:62, pDone:'0,00%', pProg:'100,00%' },
        { reg:'REG-9', total:82, done:0, prog:82, pDone:'0,00%', pProg:'100,00%' },
        { reg:'REG-10', total:80, done:0, prog:80, pDone:'0,00%', pProg:'100,00%' }
    ],

    // --- DATA NO. 6: PRODUKTIVITAS (BARU DITAMBAHKAN) ---
    prodBulan: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sept', 'Okt'],
    prodEBIT: [2971, 3101, 3203, 3287, 3311, 3573, 11486, 3803, 4104, 7008],
    prodEBITDA: [7082, 7745, 7898, 7927, 8025, 8265, 16443, 8345, 8901, 11668],
    prodEAT: [1757, 2382, 2455, 2478, 2497, 2627, 7961, 2693, 4266, 5133],
    prodKaryawan: [5183, 5413, 5591, 5384, 5371, 5359, 5354, 5405, 5475, 5559]
};