import "./reset.scss";
import "./app.scss";

let tabs = [
  {
    "tab_label":"Seattle",
    "title":"Seattle",
    "subtitle":"",
    "content":"Seattle is a seaport city on the West Coast of the United States. It is the seat of King County, Washington. With a 2020 population of 737,015, it is the largest city in both the state of Washington and the Pacific Northwest region of North America. The Seattle metropolitan area's population is 4.02 million, making it the 15th-largest in the United States. Its growth rate of 21.1% between 2010 and 2020 made it one of country's fastest-growing large cities. Seattle is situated on an isthmus between Puget Sound (an inlet of the Pacific Ocean) and Lake Washington. It is the northernmost major city in the United States, located about 100 miles (160 km) south of the Canadian border. A major gateway for trade with East Asia, Seattle is the fourth-largest port in North America in terms of container handling as of 2021. The Seattle area was inhabited by Native Americans for at least 4,000 years before the first permanent European settlers. Arthur A. Denny and his group of travelers, subsequently known as the Denny Party, arrived from Illinois via Portland, Oregon, on the schooner Exact at Alki Point on November 13, 1851. The settlement was moved to the eastern shore of Elliott Bay in 1852 and named 'Seattle' in honor of Native American Chief Si'ahl of the local Duwamish and Suquamish tribes. Seattle currently has high populations of Native Americans alongside Americans with strong Asian, African, European, and Scandinavian ancestry, and hosts the sixth-largest LGBT community in the U.S. Logging was Seattle's first major industry, but by the late 19th century, the city had become a commercial and shipbuilding center as a gateway to Alaska during the Klondike Gold Rush. Growth after World War II was partially due to the local Boeing company, which established Seattle as a center for aircraft manufacturing. The Seattle area developed into a technology center from the 1980s onwards with companies like Microsoft becoming established in the region; Microsoft founder Bill Gates is a Seattleite by birth. Internet retailer Amazon was founded in Seattle in 1994, and major airline Alaska Airlines is based in SeaTac, Washington, serving Seattle's international airport, Seattle–Tacoma International Airport. The stream of new software, biotechnology, and Internet companies led to an economic revival, which increased the city's population by almost 50,000 between 1990 and 2000. The culture of Seattle is heavily defined by its significant musical history. Between 1918 and 1951, nearly 24 jazz nightclubs existed along Jackson Street, from the current Chinatown/International District to the Central District. The jazz scene nurtured the early careers of Ernestine Anderson, Ray Charles, Quincy Jones, and others. The city is also the origin of rock acts such as Foo Fighters, Heart, and Jimi Hendrix, as well as the grunge subgenre of rock and its pioneering bands Alice in Chains, Pearl Jam, Nirvana, and Soundgarden.",
    "image":"assets/seattle.jpg",
    "image_alt":"City of Seattle"
  },
  {
    "tab_label":"New York",
    "title":"New York",
    "subtitle":"",
    "content":"New York, often called New York City or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is the most densely populated major city in the United States and more than twice as populous as Los Angeles, the nation's second-largest city. The city also has a population that is larger than that of 38 individual U.S. states. New York City is located at the southern tip of New York State. The city constitutes the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the U.S. by both population and urban area. With over 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York is one of the world's most populous megacities, and over 58 million people live within 250 mi (400 km) of the city. New York City is a global cultural, financial, entertainment, and media center with a significant influence on commerce, health care and life sciences, research, technology, education, politics, tourism, dining, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy, and is sometimes described as the capital of the world.",
    "image":"assets/new_york.jpg",
    "image_alt":"City of New York"
  },
  {
    "tab_label":"Los Angeles",
    "title":"Los Angeles",
    "subtitle":"",
    "content":"Los Angeles, often referred to by its initials L.A., is the commercial, financial, and cultural center of Southern California. Los Angeles is the largest city in California, the second-most populous city in the United States after New York City, and one of the world's most populous megacities. With a population of roughly 3.9 million residents within the city limits as of 2020,[7] Los Angeles is known for its Mediterranean climate, ethnic and cultural diversity, being the home of the Hollywood film industry, and its sprawling metropolitan area. The majority of the city proper lies in a basin in Southern California adjacent to the Pacific Ocean in the west and extending partly through the Santa Monica Mountains and north into the San Fernando Valley, with the city bordering the San Gabriel Valley to its east. It covers about 469 square miles (1,210 km2),[6] and is the county seat of Los Angeles County, which is the most populous county in the United States with an estimated 9.86 million residents as of 2022.",
    "image":"assets/los_angeles.jpg",
    "image_alt":"City of Los Angeles"
  },
  {
    "tab_label":"El Paso",
    "title":"El Paso",
    "subtitle":"",
    "content":"El Paso is a city in and the county seat of El Paso County, Texas, United States. The 2020 population of the city from the U.S. Census Bureau was 678,815,[4] making it the 22nd-largest city in the U.S., the sixth-largest city in Texas, and the second-largest city in the Southwestern United States after Phoenix, Arizona. The city has also the largest hispanic population share of main cities in the U.S. with 81% of its population being Hispanic. Its metropolitan statistical area covers all of El Paso and Hudspeth counties in Texas, and had a population of 868,859 in 2020. El Paso has consistently been ranked as one of the safest large cities in the United States. El Paso stands on the Rio Grande across the Mexico–United States border from Ciudad Juárez, the most populous city in the Mexican state of Chihuahua with over 1.5 million people.[9] The Las Cruces area, in the neighboring U.S. state of New Mexico, has a population of 219,561.[10] On the U.S. side, the El Paso metropolitan area forms part of the larger El Paso–Las Cruces combined statistical area, with a population of 1,092,742. These three cities form a combined international metropolitan area sometimes referred to as the Paso del Norte or the Borderplex. The region of 2.7 million people constitutes the largest bilingual and binational workforce in the Western Hemisphere.",
    "image":"assets/el_paso.jpeg",
    "image_alt":"City of El Paso"
  },
  {
    "tab_label":"Seattle 2",
    "title":"Seattle 2",
    "subtitle":"",
    "content":"Seattle is a seaport city on the West Coast of the United States. It is the seat of King County, Washington. With a 2020 population of 737,015, it is the largest city in both the state of Washington and the Pacific Northwest region of North America. The Seattle metropolitan area's population is 4.02 million, making it the 15th-largest in the United States. Its growth rate of 21.1% between 2010 and 2020 made it one of country's fastest-growing large cities. Seattle is situated on an isthmus between Puget Sound (an inlet of the Pacific Ocean) and Lake Washington. It is the northernmost major city in the United States, located about 100 miles (160 km) south of the Canadian border. A major gateway for trade with East Asia, Seattle is the fourth-largest port in North America in terms of container handling as of 2021. The Seattle area was inhabited by Native Americans for at least 4,000 years before the first permanent European settlers. Arthur A. Denny and his group of travelers, subsequently known as the Denny Party, arrived from Illinois via Portland, Oregon, on the schooner Exact at Alki Point on November 13, 1851. The settlement was moved to the eastern shore of Elliott Bay in 1852 and named 'Seattle' in honor of Native American Chief Si'ahl of the local Duwamish and Suquamish tribes. Seattle currently has high populations of Native Americans alongside Americans with strong Asian, African, European, and Scandinavian ancestry, and hosts the sixth-largest LGBT community in the U.S. Logging was Seattle's first major industry, but by the late 19th century, the city had become a commercial and shipbuilding center as a gateway to Alaska during the Klondike Gold Rush. Growth after World War II was partially due to the local Boeing company, which established Seattle as a center for aircraft manufacturing. The Seattle area developed into a technology center from the 1980s onwards with companies like Microsoft becoming established in the region; Microsoft founder Bill Gates is a Seattleite by birth. Internet retailer Amazon was founded in Seattle in 1994, and major airline Alaska Airlines is based in SeaTac, Washington, serving Seattle's international airport, Seattle–Tacoma International Airport. The stream of new software, biotechnology, and Internet companies led to an economic revival, which increased the city's population by almost 50,000 between 1990 and 2000. The culture of Seattle is heavily defined by its significant musical history. Between 1918 and 1951, nearly 24 jazz nightclubs existed along Jackson Street, from the current Chinatown/International District to the Central District. The jazz scene nurtured the early careers of Ernestine Anderson, Ray Charles, Quincy Jones, and others. The city is also the origin of rock acts such as Foo Fighters, Heart, and Jimi Hendrix, as well as the grunge subgenre of rock and its pioneering bands Alice in Chains, Pearl Jam, Nirvana, and Soundgarden.",
    "image":"assets/seattle.jpg",
    "image_alt":"City of Seattle"
  },
  {
    "tab_label":"New York 2",
    "title":"New York 2",
    "subtitle":"",
    "content":"New York, often called New York City or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is the most densely populated major city in the United States and more than twice as populous as Los Angeles, the nation's second-largest city. The city also has a population that is larger than that of 38 individual U.S. states. New York City is located at the southern tip of New York State. The city constitutes the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the U.S. by both population and urban area. With over 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York is one of the world's most populous megacities, and over 58 million people live within 250 mi (400 km) of the city. New York City is a global cultural, financial, entertainment, and media center with a significant influence on commerce, health care and life sciences, research, technology, education, politics, tourism, dining, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy, and is sometimes described as the capital of the world.",
    "image":"assets/new_york.jpg",
    "image_alt":"City of New York"
  },
  {
    "tab_label":"Los Angeles 2",
    "title":"Los Angeles 2",
    "subtitle":"",
    "content":"Los Angeles, often referred to by its initials L.A., is the commercial, financial, and cultural center of Southern California. Los Angeles is the largest city in California, the second-most populous city in the United States after New York City, and one of the world's most populous megacities. With a population of roughly 3.9 million residents within the city limits as of 2020,[7] Los Angeles is known for its Mediterranean climate, ethnic and cultural diversity, being the home of the Hollywood film industry, and its sprawling metropolitan area. The majority of the city proper lies in a basin in Southern California adjacent to the Pacific Ocean in the west and extending partly through the Santa Monica Mountains and north into the San Fernando Valley, with the city bordering the San Gabriel Valley to its east. It covers about 469 square miles (1,210 km2),[6] and is the county seat of Los Angeles County, which is the most populous county in the United States with an estimated 9.86 million residents as of 2022.",
    "image":"assets/los_angeles.jpg",
    "image_alt":"City of Los Angeles"
  }
];

let currentTab = 0;

function changeTab(index){
  let current = document.getElementById(`tab-${currentTab}`);
  let selectedTab = document.getElementById(`tab-${index}`);
  let previousPanel = document.getElementById(`panel-${currentTab}`);
  let selectedPanel = document.getElementById(`panel-${index}`);
  previousPanel.style.display = "none"
  selectedPanel.style.removeProperty("display");
  current.ariaSelected = false;
  selectedTab.ariaSelected = true;
  currentTab = index;
}

function makeContentTemplate(data, index){
  let element = document.createElement('div');
      element.role = "tabpanel";
      element.id = `panel-${index}`;
      element.style.display = "none";
      element.innerHTML = `
      <h1 class="content__title">${data.title}</h1>
      <div class="content__main">
        <p class="content__main__text">${data.content}</p>
        <div class="content__main__container">
          <img class="content__main__container__image" alt="${data.image_alt}" src="${data.image}"></img>
          <span class="content__main__container__description">${data.image_alt}</span>
        </div>
      </div>
      `
      return element;
}

function makeTabTemplate(data, index){
  let element = document.createElement('div');
  element.id = `tab-${index}`;
  element.className = "menu__tab";
  element.role = "tab"
  element.ariaSelected = false;
  element.innerHTML = `<span>${data.tab_label}</span>`;
  element.onclick = function() {
    changeTab(index);
  }

  return element;
}

function initTemplate(){
  return new Promise((resolve) => {
    let container = document.getElementById('app');
    container.innerHTML = `
      <div class="main">
        <div id="tab-list" class="menu" role="tablist"></div>
        <div id="tab-content" class="content"></div>
      </div>
    `;
    resolve();
  })
}

function initTabs(){
  return new Promise((resolve) => {
    let tabContainer = document.getElementById('tab-list');
    let panelContainer = document.getElementById('tab-content');
    tabs.forEach((tab, index) => {
      tabContainer.appendChild(makeTabTemplate(tab,index));
      panelContainer.appendChild(makeContentTemplate(tab,index));
    });
    resolve();
  })
}

initTemplate().then(initTabs().then(changeTab(0)))