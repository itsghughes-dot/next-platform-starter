function slug(id) {
  return id.replace(/_/g, '-');
}

export function stripHtml(html) {
  return html.replace(/<[^>]+>/g, '');
}

export const ALL_MATCHES = [
  {
    id: 'mci_8-0_wat_2019',
    slug: slug('mci_8-0_wat_2019'),
    meta: {
      home: 'Man City', away: 'Watford', score: '8-0',
      homeColour: '#6CABDD', awayColour: '#FBEE23',
      date: '21 Sep 2019',
      label: 'Premier League · Sat 21 Sep 2019 · 3:00pm BST',
      blurb: 'The Etihad, 3pm. <strong>Man City sit 2nd</strong> (W4 D1 L1, 13 pts) after a shock home loss to Norwich last weekend. <strong>Watford are rock bottom</strong> — winless in six, just 2 points all season. Bernardo Silva and De Bruyne have been in electric form. Deeney leads the line for a Hornets side desperate for a response.',
    },
  },
  {
    id: 'lei_5-3_mun_2014',
    slug: slug('lei_5-3_mun_2014'),
    meta: {
      home: 'Leicester', away: 'Man United', score: '5-3',
      homeColour: '#003090', awayColour: '#DA291C',
      date: '21 Sep 2014',
      label: 'Premier League · Sun 21 Sep 2014 · 4:00pm BST',
      blurb: "King Power Stadium. <strong>Van Gaal's United</strong> (W2 D2 L1) have splashed £150m in the summer — Falcao, Di Maria and Van Persie all start. <strong>Leicester sit 16th</strong>, battling to stay up. Vardy has scored once all season. Cambiasso, Schmeichel and Ulloa are the Foxes' best hopes of causing an upset.",
    },
  },
  {
    id: 'ars_2-8_mun_2011',
    slug: slug('ars_2-8_mun_2011'),
    meta: {
      home: 'Arsenal', away: 'Man United', score: '2-8',
      homeColour: '#EF0107', awayColour: '#DA291C',
      date: '28 Aug 2011',
      label: 'Premier League · Sun 28 Aug 2011 · 4:00pm BST',
      blurb: "The Emirates. <strong>Arsenal are missing eight first-teamers</strong> through injury — Fabregas, Nasri, Rosický, Diaby and more. <strong>Ferguson's United</strong> sit 2nd and are in ruthless early-season form. Young and Welbeck have been sharp all summer. Arsenal's young, depleted backline faces a stern test.",
    },
  },
  {
    id: 'liv_4-3_new_1996',
    slug: slug('liv_4-3_new_1996'),
    meta: {
      home: 'Liverpool', away: 'Newcastle', score: '4-3',
      homeColour: '#C8102E', awayColour: '#241F20',
      date: '3 Apr 1996',
      label: 'Premier League · Wed 3 Apr 1996 · 8:00pm BST',
      blurb: "Anfield, April 1996. <strong>Newcastle lead the title race by a point</strong> with five games left — Keegan's men have been imperious all season. <strong>Liverpool sit 3rd</strong>, out of the title hunt but dangerous at home. Fowler has 28 goals. Asprilla and Ferdinand up top for the Magpies.",
    },
  },
  {
    id: 'whu_2-3_tot_2019',
    slug: slug('whu_2-3_tot_2019'),
    meta: {
      home: 'West Ham', away: 'Tottenham', score: '2-3',
      homeColour: '#7A263A', awayColour: '#132257',
      date: '23 Nov 2019',
      label: 'Premier League · Sat 23 Nov 2019 · 3:00pm BST',
      blurb: "<strong>Jose Mourinho was appointed Spurs manager 48 hours ago.</strong> He inherits a squad that hasn't won away in the league since January. <strong>West Ham sit 17th</strong> and need a result badly. Son, Kane and Moura lead Spurs' attack.",
    },
  },
  {
    id: 'new_5-1_sun_2010',
    slug: slug('new_5-1_sun_2010'),
    meta: {
      home: 'Newcastle', away: 'Sunderland', score: '5-1',
      homeColour: '#241F20', awayColour: '#EB172B',
      date: '31 Oct 2010',
      label: 'Premier League · Sun 31 Oct 2010 · 1:30pm GMT',
      blurb: "St James' Park, Halloween. <strong>The Tyne-Wear derby.</strong> Newcastle sit 11th, Sunderland 10th — just two points between them. <strong>Nolan has been Newcastle's talisman</strong> all season. These derbies always produce drama.",
    },
  },
  {
    id: 'new_4-4_ars_2011',
    slug: slug('new_4-4_ars_2011'),
    meta: {
      home: 'Newcastle', away: 'Arsenal', score: '4-4',
      homeColour: '#241F20', awayColour: '#EF0107',
      date: '5 Feb 2011',
      label: 'Premier League · Sat 5 Feb 2011 · 3:00pm GMT',
      blurb: "St James' Park, February 2011. <strong>Arsenal sit top of the Premier League</strong> (W16 D4 L2) chasing their first title since the Invincibles. Van Persie and Walcott are in blistering form. <strong>Newcastle are 12th</strong> but feisty at home — Tiote's screamer finishes it.",
    },
  },
  {
    id: 'mun_8-2_ars_2011',
    slug: slug('mun_8-2_ars_2011'),
    meta: {
      home: 'Man United', away: 'Arsenal', score: '8-2',
      homeColour: '#DA291C', awayColour: '#EF0107',
      date: '28 Aug 2011',
      label: 'Premier League · Sun 28 Aug 2011 · 1:30pm BST',
      blurb: "<strong>Arsenal arrived in turmoil</strong> — Cesc Fàbregas sold to Barcelona, Nasri to Man City, no net spend. <strong>Ferguson's United were champions</strong> and ruthless at home. Young and Welbeck sharp all summer. Arsenal's depleted, fragile backline faces a stern test.",
    },
  },
  {
    id: 'lei_9-0_sou_2019',
    slug: slug('lei_9-0_sou_2019'),
    meta: {
      home: 'Leicester', away: 'Southampton', score: '9-0',
      homeColour: '#003090', awayColour: '#D71920',
      date: '25 Oct 2019',
      label: 'Premier League · Fri 25 Oct 2019 · 8:00pm BST',
      blurb: "<strong>Southampton were in freefall</strong> — one win in eight, Hasenhüttl under enormous pressure. <strong>Leicester were flying under Brendan Rodgers</strong>, with Vardy and Pérez in frightening form. An away side in crisis visiting a team at full throttle.",
    },
  },
  {
    id: 'liv_9-0_bou_2022',
    slug: slug('liv_9-0_bou_2022'),
    meta: {
      home: 'Liverpool', away: 'Bournemouth', score: '9-0',
      homeColour: '#C8102E', awayColour: '#DA291C',
      date: '27 Aug 2022',
      label: 'Premier League · Sat 27 Aug 2022 · 3:00pm BST',
      blurb: "<strong>Liverpool were stuttering</strong> — three draws in their opening three games, already under pressure. <strong>Bournemouth were newly promoted</strong> and untested at this level. Klopp needed a response. Núñez is on the bench, waiting for his debut.",
    },
  },
  {
    id: 'avl_7-2_liv_2020',
    slug: slug('avl_7-2_liv_2020'),
    meta: {
      home: 'Aston Villa', away: 'Liverpool', score: '7-2',
      homeColour: '#95BFE5', awayColour: '#C8102E',
      date: '4 Oct 2020',
      label: 'Premier League · Sun 4 Oct 2020 · 7:15pm BST',
      blurb: "<strong>Liverpool were reigning champions</strong> and heavy favourites. Aston Villa had barely survived relegation the previous season. <strong>Alisson is injured</strong> — backup Adrian starts. Watkins makes his home debut. Everything points to a routine away win.",
    },
  },
  {
    id: 'mci_6-3_mun_2011',
    slug: slug('mci_6-3_mun_2011'),
    meta: {
      home: 'Man City', away: 'Man United', score: '6-3',
      homeColour: '#6CABDD', awayColour: '#DA291C',
      date: '23 Oct 2011',
      label: 'Premier League · Sun 23 Oct 2011 · 1:30pm BST',
      blurb: "<strong>City hadn't beaten United at home since 1969.</strong> Balotelli starts up front wearing a T-shirt under his kit that nobody's seen yet. <strong>United led by Ferguson</strong> are slight favourites. Why Always Me.",
    },
  },
  {
    id: 'mci_6-3_mun_2023',
    slug: slug('mci_6-3_mun_2023'),
    meta: {
      home: 'Man City', away: 'Man United', score: '6-3',
      homeColour: '#6CABDD', awayColour: '#DA291C',
      date: '29 Oct 2023',
      label: 'Premier League · Sun 29 Oct 2023 · 4:30pm GMT',
      blurb: "<strong>Haaland has been unstoppable</strong> all season — the most feared striker in Europe. <strong>Ten Hag's United are finding their feet</strong> but inconsistent away from home. City's midfield trio of Rodri, De Bruyne and Bernardo Silva may be the best in Europe.",
    },
  },
  {
    id: 'che_4-4_mci_2023',
    slug: slug('che_4-4_mci_2023'),
    meta: {
      home: 'Chelsea', away: 'Man City', score: '4-4',
      homeColour: '#034694', awayColour: '#6CABDD',
      date: '12 Nov 2023',
      label: 'Premier League · Sun 12 Nov 2023 · 2:00pm GMT',
      blurb: "<strong>Chelsea led 4-0 at half time.</strong> The reigning treble winners were being demolished. Four City goals in the second half completed the most stunning comeback of the season.",
    },
  },
  {
    id: 'tot_6-2_eve_2020',
    slug: slug('tot_6-2_eve_2020'),
    meta: {
      home: 'Tottenham', away: 'Everton', score: '6-2',
      homeColour: '#132257', awayColour: '#003399',
      date: '13 Sep 2020',
      label: 'Premier League · Sun 13 Sep 2020 · 4:30pm BST',
      blurb: "<strong>Mourinho's first season at Spurs.</strong> Son and Kane look dangerous together — the chemistry is building. Son hat-trick. Kane 6 assists. The partnership has arrived.",
    },
  },
  {
    id: 'mun_6-2_lee_2020',
    slug: slug('mun_6-2_lee_2020'),
    meta: {
      home: 'Man United', away: 'Leeds United', score: '6-2',
      homeColour: '#DA291C', awayColour: '#FFCD00',
      date: '20 Dec 2020',
      label: 'Premier League · Sun 20 Dec 2020 · 4:30pm GMT',
      blurb: "<strong>First league meeting since 2004.</strong> The most anticipated fixture of the season. Bielsa's Leeds play fearless high-press football — brave but exposed at the back. Solskjær's United have Fernandes pulling the strings.",
    },
  },
  {
    id: 'liv_7-0_cry_2020',
    slug: slug('liv_7-0_cry_2020'),
    meta: {
      home: 'Liverpool', away: 'Crystal Palace', score: '7-0',
      homeColour: '#C8102E', awayColour: '#1B458F',
      date: '19 Dec 2020',
      label: 'Premier League · Sat 19 Dec 2020 · 5:30pm GMT',
      blurb: "<strong>Liverpool are in devastating form</strong> — Klopp's gegenpressing system at its peak. Firmino, Mané and Salah are the most feared front three in Europe. The biggest win in Liverpool's Premier League history.",
    },
  },
  {
    id: 'mci_7-0_lee_2021',
    slug: slug('mci_7-0_lee_2021'),
    meta: {
      home: 'Man City', away: 'Leeds United', score: '7-0',
      homeColour: '#6CABDD', awayColour: '#FFCD00',
      date: '14 Dec 2021',
      label: 'Premier League · Tue 14 Dec 2021 · 7:30pm GMT',
      blurb: "<strong>Leeds were already struggling</strong> in their second season back in the top flight. City were the champions. Mahrez with two. City went seven without reply. A brutal Tuesday night in Manchester.",
    },
  },
  {
    id: 'nfo_0-6_mci_2022',
    slug: slug('nfo_0-6_mci_2022'),
    meta: {
      home: 'Nottm Forest', away: 'Man City', score: '0-6',
      homeColour: '#DD0000', awayColour: '#6CABDD',
      date: '31 Aug 2022',
      label: 'Premier League · Wed 31 Aug 2022 · 7:30pm BST',
      blurb: "<strong>Forest had just been promoted</strong> after 23 years away. City were champions. Erling Haaland, brand new to English football, scored twice on his first away league start.",
    },
  },
  {
    id: 'tot_6-2_lei_2022',
    slug: slug('tot_6-2_lei_2022'),
    meta: {
      home: 'Tottenham', away: 'Leicester', score: '6-2',
      homeColour: '#132257', awayColour: '#003090',
      date: '17 Sep 2022',
      label: 'Premier League · Sat 17 Sep 2022 · 3:00pm BST',
      blurb: "<strong>Son had gone six games without a goal.</strong> The drought ended emphatically — he scored four. Kane two. One of the finest individual Premier League performances in years.",
    },
  },
  {
    id: 'new_4-0_tot_2023',
    slug: slug('new_4-0_tot_2023'),
    meta: {
      home: 'Newcastle', away: 'Tottenham', score: '4-0',
      homeColour: '#241F20', awayColour: '#132257',
      date: '10 Dec 2023',
      label: 'Premier League · Sun 10 Dec 2023 · 2:00pm GMT',
      blurb: "<strong>Newcastle were in the Champions League</strong> for the first time in twenty years. Tottenham, under Postecoglou, were unpredictable. St James' Park at full voice delivered a complete performance.",
    },
  },
  {
    id: 'che_0-5_ars_2023',
    slug: slug('che_0-5_ars_2023'),
    meta: {
      home: 'Chelsea', away: 'Arsenal', score: '0-5',
      homeColour: '#034694', awayColour: '#EF0107',
      date: '22 Oct 2023',
      label: 'Premier League · Sun 22 Oct 2023 · 4:30pm BST',
      blurb: "<strong>Arsenal were Premier League title challengers</strong> under Arteta — Saka and Martinelli in brilliant form. Chelsea were in upheaval — Pochettino their fourth manager in 18 months. A London derby with very different momentum.",
    },
  },
  {
    id: 'bre_4-1_che_2022',
    slug: slug('bre_4-1_che_2022'),
    meta: {
      home: 'Brentford', away: 'Chelsea', score: '4-1',
      homeColour: '#E30613', awayColour: '#034694',
      date: '19 Oct 2022',
      label: 'Premier League · Wed 19 Oct 2022 · 7:45pm BST',
      blurb: "<strong>Chelsea were in freefall under Potter</strong> — no wins in five. Brentford were the Premier League's surprise package. Ivan Toney magnificent. One of Chelsea's most humbling nights.",
    },
  },
  {
    id: 'liv_5-1_ars_2014',
    slug: slug('liv_5-1_ars_2014'),
    meta: {
      home: 'Liverpool', away: 'Arsenal', score: '5-1',
      homeColour: '#C8102E', awayColour: '#EF0107',
      date: '8 Feb 2014',
      label: 'Premier League · Sat 8 Feb 2014 · 5:30pm GMT',
      blurb: "<strong>Liverpool were five points off the top</strong> with a game in hand, chasing their first title in 24 years. Arsenal were the leaders. Suárez was unstoppable. The title race turned on its axis.",
    },
  },
  {
    id: 'che_6-0_ars_2014',
    slug: slug('che_6-0_ars_2014'),
    meta: {
      home: 'Chelsea', away: 'Arsenal', score: '6-0',
      homeColour: '#034694', awayColour: '#EF0107',
      date: '22 Mar 2014',
      label: 'Premier League · Sat 22 Mar 2014 · 5:30pm GMT',
      blurb: "<strong>Arsenal's heaviest defeat in 115 years.</strong> They arrived as title contenders. Mourinho's Chelsea were clinical, organised, merciless. Özil invisible. Fabianski at fault.",
    },
  },
  {
    id: 'bou_4-0_che_2019',
    slug: slug('bou_4-0_che_2019'),
    meta: {
      home: 'Bournemouth', away: 'Chelsea', score: '4-0',
      homeColour: '#DA291C', awayColour: '#034694',
      date: '30 Jan 2019',
      label: 'Premier League · Wed 30 Jan 2019 · 7:45pm GMT',
      blurb: "<strong>Chelsea were in Sarri's first season</strong> — inconsistent but with moments of brilliance. Bournemouth tore them apart. Wilson two goals. Fraser outstanding. Chelsea's defence completely at sea.",
    },
  },
  {
    id: 'ars_4-3_liv_2016',
    slug: slug('ars_4-3_liv_2016'),
    meta: {
      home: 'Arsenal', away: 'Liverpool', score: '4-3',
      homeColour: '#EF0107', awayColour: '#C8102E',
      date: '14 Aug 2016',
      label: 'Premier League · Sun 14 Aug 2016 · 4:00pm BST',
      blurb: "<strong>Opening day of the season.</strong> Liverpool led 4-1. Klopp's pressing system overwhelming Arsenal. Then Arsenal scored three in 20 minutes. Oxlade-Chamberlain wonder strike. The most dramatic opening day in Premier League history.",
    },
  },
  {
    id: 'tot_4-5_ars_2004',
    slug: slug('tot_4-5_ars_2004'),
    meta: {
      home: 'Tottenham', away: 'Arsenal', score: '4-5',
      homeColour: '#132257', awayColour: '#EF0107',
      date: '13 Nov 2004',
      label: 'Premier League · Sun 13 Nov 2004 · 4:05pm GMT',
      blurb: "<strong>Arsenal were the Invincibles</strong> — unbeaten all season, the best team in England. Henry was unstoppable, Bergkamp orchestrating behind. Spurs had their own quality. A north London derby with everything at stake.",
    },
  },
  {
    id: 'mci_3-2_qpr_2012',
    slug: slug('mci_3-2_qpr_2012'),
    meta: {
      home: 'Man City', away: 'QPR', score: '3-2',
      homeColour: '#6CABDD', awayColour: '#1D5BA4',
      date: '13 May 2012',
      label: 'Premier League · Sun 13 May 2012 · 5:00pm BST',
      blurb: "<strong>City needed to win to take the title from United.</strong> QPR were battling relegation. City led then trailed 2-1 with 10 minutes left. Džeko made it 2-2. Then, in injury time, Agüero. The most dramatic moment in Premier League history.",
    },
  },
];

export function getMatchBySlug(slug) {
  return ALL_MATCHES.find((m) => m.slug === slug);
}

export function getAllSlugs() {
  return ALL_MATCHES.map((m) => m.slug);
}
