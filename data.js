var APP_DATA = {
    tanggalUpdate: "16 Oktober 2026",
    
    // --- DATA HISTORIS (Jan - Okt) ---
    histBulan: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sept','Okt'],
    
    histKomposisi: [
        {q:'I', b:'Jan', ssi:454, jst:4336, glo:333, dika:60, total:5183},
        {q:'I', b:'Feb', ssi:447, jst:4583, glo:332, dika:51, total:5413},
        {q:'I', b:'Mar', ssi:519, jst:4687, glo:332, dika:53, total:5591},
        {q:'II', b:'Apr', ssi:515, jst:4479, glo:332, dika:58, total:5384},
        {q:'II', b:'Mei', ssi:514, jst:4478, glo:332, dika:47, total:5371},
        {q:'II', b:'Jun', ssi:514, jst:4468, glo:332, dika:45, total:5359},
        {q:'III', b:'Jul', ssi:521, jst:4460, glo:332, dika:41, total:5354},
        {q:'III', b:'Agu', ssi:523, jst:4509, glo:332, dika:41, total:5405},
        {q:'III', b:'Sept', ssi:528, jst:4574, glo:332, dika:41, total:5475},
        {q:'IV', b:'Okt', ssi:536, jst:4650, glo:332, dika:41, total:5559}
    ],

    histGajiTotal: [28618, 30028, 31252, 30036, 29928, 29878, 29980, 30363, 30681, 31140],
    detailKomposisiOkt: [536, 4650, 332, 41], 
    detailGajiOkt: [5203, 23673, 1973, 171, 114, 6], 

    histRkapAng: [30422, 30422, 30422, 30422, 30422, 30422, 30422, 30422, 30422, 30422],
    histRkapDiff: [1804, 394, -829, 386, 495, 545, 443, 59, -258, -717],

    // --- DATA DETAIL KOMPENSASI (No. 4) ---
    kompensasi: [
        { prog: 'Kompensasi', unit: 'SSI', org: 56, rp: 402949584, ket: 'Kompensasi Akhir Masa Kontrak Sept 2026', tgl: '20/10/2026', status: 'On-Progress' },
        { prog: 'Kompensasi', unit: 'JST', org: 151, rp: 640799868, ket: 'Kompensasi Akhir Masa Kontrak Sept (Jeda) - PB', tgl: '15/10/2026', status: 'Done' },
        { prog: 'Kompensasi', unit: 'JST', org: 1207, rp: 2452326635, ket: 'Kompensasi Akhir Masa Kontrak Sept 2026', tgl: '20/10/2026', status: 'On-Progress' }
    ],

    // --- DATA DETAIL PKWT (No. 5) ---
    pkwtRegion: [
        { reg:'REG-1', total:120, done:32, prog:88 }, { reg:'REG-2', total:158, done:101, prog:57 },
        { reg:'REG-3', total:356, done:33, prog:323 }, { reg:'REG-4', total:114, done:62, prog:52 },
        { reg:'REG-5', total:126, done:50, prog:76 }, { reg:'REG-6', total:106, done:71, prog:35 },
        { reg:'REG-7', total:154, done:128, prog:26 }, { reg:'REG-8', total:61, done:22, prog:39 },
        { reg:'REG-9', total:65, done:37, prog:28 }, { reg:'REG-10', total:79, done:4, prog:75 }
    ]
};