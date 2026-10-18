// ===== QUESTION BANK =====
// To add a question: copy any line, change the text, the four answers, the correct answer, and the note.
// "correct" must match one of the answers exactly. Each category can hold as many questions as you like.
const q = (text, answers, correct, note) => ({ text, answers, correct, note });

const questionBank = [
  { category: 'Music', icon: '♫', art: '/art/music-culture.png', questions: [
    q('Which song won Record of the Year at the 2025 Grammys?', ['Not Like Us', 'Espresso', 'Texas Hold ’Em', 'Like That'], 'Not Like Us', 'Kendrick Lamar’s Drake diss swept the night, including Song of the Year.'),
    q('Kendrick Lamar headlined which Super Bowl halftime show in New Orleans?', ['Super Bowl LIX', 'Super Bowl LVII', 'Super Bowl LVIII', 'Super Bowl LVI'], 'Super Bowl LIX', 'His February 2025 set featured SZA and a Serena Williams cameo.'),
    q('Which Beyoncé album won Album of the Year at the 2025 Grammys?', ['Cowboy Carter', 'Renaissance', 'Lemonade', 'Beyoncé'], 'Cowboy Carter', 'It was her first Album of the Year win after years of nominations.'),
    q('Who holds the record for the most Grammy wins of all time?', ['Beyoncé', 'Quincy Jones', 'Jay-Z', 'Stevie Wonder'], 'Beyoncé', 'Beyoncé passed the record in 2023 and kept adding to it.'),
    q('Megan Thee Stallion’s fans are known as the…', ['Hotties', 'Barbz', 'Navy', 'Beyhive'], 'Hotties', 'Real Hot Girl summer energy since day one.'),
    q('SZA’s chart-topping 2022 album is titled…', ['SOS', 'Ctrl', 'Z', 'Mayday'], 'SOS', 'SOS spent 10 weeks at No. 1 on the Billboard 200.'),
    q('Whose 2023 hit “Water” launched a worldwide dance challenge?', ['Tyla', 'Tems', 'Ayra Starr', 'Doja Cat'], 'Tyla', 'The South African star won the first Grammy for Best African Music Performance.'),
    q('Bruno Mars and Anderson .Paak teamed up as which duo?', ['Silk Sonic', 'Velvet Soul', 'Gold Room', 'Smooth Operators'], 'Silk Sonic', 'Their single “Leave the Door Open” swept the 2022 Grammys.'),
    q('Which 2019 hit set a record with 19 weeks at No. 1 on the Billboard Hot 100?', ['Old Town Road', 'Sunflower', 'Truth Hurts', 'Bad Guy'], 'Old Town Road', 'Lil Nas X and Billy Ray Cyrus turned a TikTok meme into history.'),
    q('Who revealed a pregnancy during her 2023 Super Bowl halftime show?', ['Rihanna', 'Cardi B', 'Beyoncé', 'Normani'], 'Rihanna', 'Fans spotted the baby bump mid-performance.'),
    q('Usher headlined the 2024 Super Bowl halftime show in which city?', ['Las Vegas', 'Atlanta', 'Miami', 'Los Angeles'], 'Las Vegas', 'Super Bowl LVIII was the first played in Las Vegas.'),
    q('Who won Best New Artist at the 2024 Grammys?', ['Victoria Monét', 'Ice Spice', 'Coco Jones', 'Jelly Roll'], 'Victoria Monét', 'She had already written hits for Ariana Grande before going solo.'),
    q('Which rapper won the 2025 Grammy for Best Rap Album?', ['Doechii', 'Latto', 'GloRilla', 'Sexyy Red'], 'Doechii', 'She became only the third woman ever to win the category.'),
    q('In 2023, who became the first female rapper inducted into the Rock & Roll Hall of Fame?', ['Missy Elliott', 'Queen Latifah', 'Lil’ Kim', 'Nicki Minaj'], 'Missy Elliott', 'Supa Dupa Fly forever.'),
    q('Drake famously calls his hometown “The 6.” Which city is it?', ['Toronto', 'Houston', 'Atlanta', 'Detroit'], 'Toronto', 'The nickname comes from Toronto’s 416 area code.'),
    q('André 3000 and Big Boi make up which Atlanta duo?', ['OutKast', 'UGK', 'Goodie Mob', 'Kris Kross'], 'OutKast', 'Speakerboxxx/The Love Below won Album of the Year in 2004.'),
    q('Which Nigerian superstar calls himself the “African Giant”?', ['Burna Boy', 'Wizkid', 'Davido', 'Rema'], 'Burna Boy', 'African Giant was also the title of his 2019 album.'),
    q('Which Michael Jackson album is the best-selling album of all time?', ['Thriller', 'Bad', 'Off the Wall', 'Dangerous'], 'Thriller', 'Thriller has sold an estimated 70 million copies worldwide.'),
    q('Whose 2020 hit “Say So” blew up through a TikTok dance?', ['Doja Cat', 'Megan Thee Stallion', 'Saweetie', 'Kehlani'], 'Doja Cat', 'The dance was created by TikToker Haley Sharpe.'),
    q('Who is known as the “Queen of Soul”?', ['Aretha Franklin', 'Patti LaBelle', 'Diana Ross', 'Gladys Knight'], 'Aretha Franklin', 'R-E-S-P-E-C-T.')
  ]},
  { category: 'Film + TV', icon: '✦', art: '/art/film-tv-culture.png', questions: [
    q('In Ryan Coogler’s 2025 film Sinners, Michael B. Jordan plays…', ['Twin brothers', 'A vampire-hunting priest', 'A boxing champion', 'A blues guitar teacher'], 'Twin brothers', 'He plays Smoke and Stack, twins who open a juke joint in 1930s Mississippi.'),
    q('Who created and stars in the sitcom Abbott Elementary?', ['Quinta Brunson', 'Issa Rae', 'Ayo Edebiri', 'Keke Palmer'], 'Quinta Brunson', 'She plays Janine Teagues, a teacher in a Philadelphia public school.'),
    q('Ayo Edebiri plays which character on The Bear?', ['Sydney', 'Tina', 'Natalie', 'Marcus'], 'Sydney', 'The role won her an Emmy and a Golden Globe.'),
    q('Zendaya won two Emmys for playing Rue on which series?', ['Euphoria', 'Industry', 'Ginny & Georgia', 'Power Book II'], 'Euphoria', 'She became the youngest two-time winner for lead actress in a drama.'),
    q('Who takes up the Black Panther mantle in Wakanda Forever?', ['Shuri', 'Okoye', 'Nakia', 'M’Baku'], 'Shuri', 'Letitia Wright’s Shuri carries the legacy after T’Challa.'),
    q('Which film won Best Picture in 2017 after La La Land was announced by mistake?', ['Moonlight', 'Fences', 'Hidden Figures', 'Get Out'], 'Moonlight', 'The envelope mix-up became one of the most famous moments in Oscars history.'),
    q('Who wrote and directed the horror film Get Out?', ['Jordan Peele', 'Ryan Coogler', 'Barry Jenkins', 'Ava DuVernay'], 'Jordan Peele', 'It won him the Oscar for Best Original Screenplay.'),
    q('Who created and starred in the HBO series Insecure?', ['Issa Rae', 'Yvonne Orji', 'Michaela Coel', 'Tracee Ellis Ross'], 'Issa Rae', 'It grew out of her YouTube series Awkward Black Girl.'),
    q('Who voiced Miles Morales in Spider-Man: Into the Spider-Verse?', ['Shameik Moore', 'LaKeith Stanfield', 'Caleb McLaughlin', 'Jharrel Jerome'], 'Shameik Moore', 'He returned for Across the Spider-Verse in 2023.'),
    q('Donald Glover created and starred in which FX series named after a city?', ['Atlanta', 'Detroit', 'Baltimore', 'Chicago'], 'Atlanta', 'He plays Earn, who manages his cousin’s rap career.'),
    q('Which rapper executive produced and co-starred in Starz’s Power?', ['50 Cent', 'Snoop Dogg', 'Ice Cube', 'Method Man'], '50 Cent', 'He played Kanan Stark and built a whole Power universe of spin-offs.'),
    q('Peacock’s drama Bel-Air reimagines which classic sitcom?', ['The Fresh Prince of Bel-Air', 'Martin', 'Family Matters', 'Moesha'], 'The Fresh Prince of Bel-Air', 'It started as a fan-made trailer that went viral.'),
    q('Which filmmaker also plays Madea?', ['Tyler Perry', 'Kevin Hart', 'Eddie Murphy', 'Martin Lawrence'], 'Tyler Perry', 'Madea has headlined more than a dozen films and stage plays.'),
    q('In 2023, Viola Davis completed which rare set of awards?', ['EGOT', 'Triple Crown of Acting', 'Grand Slam', 'Hat Trick'], 'EGOT', 'A Grammy for her audiobook Finding Me completed the Emmy, Grammy, Oscar, and Tony.'),
    q('Da’Vine Joy Randolph won a 2024 Oscar for which film?', ['The Holdovers', 'Rustin', 'The Color Purple', 'Origin'], 'The Holdovers', 'She won Best Supporting Actress for playing Mary Lamb.'),
    q('Cynthia Erivo plays which witch in Wicked?', ['Elphaba', 'Glinda', 'Nessarose', 'Madame Morrible'], 'Elphaba', 'She earned an Oscar nomination for the role.'),
    q('The phrase “Bye, Felicia” comes from which 1995 comedy?', ['Friday', 'House Party', 'Bad Boys', 'Next Friday'], 'Friday', 'Ice Cube’s line became a meme decades later.'),
    q('In Coming to America, Eddie Murphy plays a prince from which fictional nation?', ['Zamunda', 'Wakanda', 'Genovia', 'Nakatomi'], 'Zamunda', 'Prince Akeem came back for Coming 2 America in 2021.'),
    q('The sitcom black-ish follows which family?', ['The Johnsons', 'The Winslows', 'The Banks', 'The Huxtables'], 'The Johnsons', 'Anthony Anderson and Tracee Ellis Ross play Dre and Bow.'),
    q('Queen Latifah played Khadijah James on which 90s sitcom?', ['Living Single', 'Girlfriends', 'Martin', 'A Different World'], 'Living Single', 'Khadijah ran Flavor magazine out of a Brooklyn brownstone.')
  ]},
  { category: 'Sports', icon: '✺', art: '/art/sports-culture.png', questions: [
    q('Who is the most decorated gymnast in history?', ['Simone Biles', 'Gabby Douglas', 'Jordan Chiles', 'Dominique Dawes'], 'Simone Biles', 'She added three more golds at the Paris 2024 Olympics.'),
    q('Which quarterback led Kansas City to Super Bowl wins in 2023 and 2024?', ['Patrick Mahomes', 'Lamar Jackson', 'Jalen Hurts', 'Russell Wilson'], 'Patrick Mahomes', 'He was named Super Bowl MVP both years.'),
    q('Who was named MVP of Super Bowl LIX?', ['Jalen Hurts', 'Saquon Barkley', 'Patrick Mahomes', 'A.J. Brown'], 'Jalen Hurts', 'His Eagles beat the Chiefs 40–22 in New Orleans.'),
    q('In 2023, LeBron James passed whom to become the NBA’s all-time leading scorer?', ['Kareem Abdul-Jabbar', 'Karl Malone', 'Kobe Bryant', 'Michael Jordan'], 'Kareem Abdul-Jabbar', 'Kareem had held the record for nearly 39 years.'),
    q('Who holds the NBA record for most career three-pointers?', ['Stephen Curry', 'Ray Allen', 'James Harden', 'Damian Lillard'], 'Stephen Curry', 'Curry passed Ray Allen in 2021 and kept going.'),
    q('Coco Gauff won her first Grand Slam title at which 2023 tournament?', ['US Open', 'Wimbledon', 'French Open', 'Australian Open'], 'US Open', 'She was 19 and won it in front of a home crowd in New York.'),
    q('Who won the women’s 100m world championship in 2023?', ['Sha’Carri Richardson', 'Shelly-Ann Fraser-Pryce', 'Elaine Thompson-Herah', 'Gabby Thomas'], 'Sha’Carri Richardson', 'She won the title in Budapest, Hungary.'),
    q('Who won the men’s 100m at the Paris 2024 Olympics by five thousandths of a second?', ['Noah Lyles', 'Kishane Thompson', 'Fred Kerley', 'Christian Coleman'], 'Noah Lyles', 'It was one of the closest Olympic finals ever.'),
    q('Deion “Coach Prime” Sanders left Jackson State to coach which school?', ['Colorado', 'Florida State', 'Texas', 'Alabama'], 'Colorado', 'He took over the Buffaloes in 2023.'),
    q('Angel Reese won a 2023 national championship with which school?', ['LSU', 'South Carolina', 'Iowa', 'UConn'], 'LSU', 'Her trash talk in the final became instant meme material.'),
    q('A’ja Wilson stars for which WNBA team?', ['Las Vegas Aces', 'New York Liberty', 'Chicago Sky', 'Atlanta Dream'], 'Las Vegas Aces', 'She is a multiple-time WNBA MVP and champion.'),
    q('How many NBA championships did Michael Jordan win with the Bulls?', ['6', '4', '5', '7'], '6', 'Two three-peats: 1991–93 and 1996–98.'),
    q('How many Masters titles has Tiger Woods won?', ['5', '3', '4', '6'], '5', 'His 2019 comeback win is one of the greatest moments in golf.'),
    q('Which jersey number is retired across all of Major League Baseball?', ['42', '24', '44', '21'], '42', 'It honors Jackie Robinson, who broke the color line in 1947.'),
    q('Which boxer was known as “The Greatest”?', ['Muhammad Ali', 'Joe Frazier', 'Sugar Ray Leonard', 'Floyd Mayweather'], 'Muhammad Ali', 'Float like a butterfly, sting like a bee.'),
    q('How many Grand Slam singles titles did Serena Williams win?', ['23', '20', '22', '24'], '23', 'The most by any player, man or woman, in the Open Era until 2023.'),
    q('Which Jamaican sprinter still holds the 100m and 200m world records?', ['Usain Bolt', 'Yohan Blake', 'Asafa Powell', 'Kishane Thompson'], 'Usain Bolt', 'His 9.58 in the 100m has stood since 2009.'),
    q('Which HBCU marching band is called the “Sonic Boom of the South”?', ['Jackson State', 'Southern', 'Florida A&M', 'Grambling State'], 'Jackson State', 'Jackson State is just a few hours down I-55 from Memphis.'),
    q('Which basketball star opened the I PROMISE School in his hometown?', ['LeBron James', 'Chris Paul', 'Dwyane Wade', 'Kevin Durant'], 'LeBron James', 'The school serves at-risk kids in Akron, Ohio.'),
    q('Who was the first Black head coach to win a Super Bowl?', ['Tony Dungy', 'Lovie Smith', 'Mike Tomlin', 'Art Shell'], 'Tony Dungy', 'His Colts beat Lovie Smith’s Bears in February 2007.')
  ]},
  { category: 'History', icon: '⌘', art: '/art/history-culture.png', questions: [
    q('Juneteenth became a federal holiday in which year?', ['2021', '2015', '2019', '2023'], '2021', 'President Biden signed it into law on June 17, 2021.'),
    q('Juneteenth celebrates the news of emancipation reaching which state in 1865?', ['Texas', 'Louisiana', 'Georgia', 'Mississippi'], 'Texas', 'Union troops announced freedom in Galveston on June 19.'),
    q('Who became the first Black woman to serve as U.S. Vice President?', ['Kamala Harris', 'Stacey Abrams', 'Michelle Obama', 'Condoleezza Rice'], 'Kamala Harris', 'She took office in January 2021.'),
    q('Kamala Harris graduated from which HBCU?', ['Howard University', 'Spelman College', 'Hampton University', 'Tuskegee University'], 'Howard University', 'She is a proud member of Alpha Kappa Alpha.'),
    q('Who became the first Black woman on the U.S. Supreme Court?', ['Ketanji Brown Jackson', 'Sonia Sotomayor', 'Loretta Lynch', 'Kamala Harris'], 'Ketanji Brown Jackson', 'She was sworn in in 2022.'),
    q('Who was the first Black president of the United States?', ['Barack Obama', 'Jesse Jackson', 'Colin Powell', 'Thurgood Marshall'], 'Barack Obama', 'He was elected in 2008 and re-elected in 2012.'),
    q('Memphis’s National Civil Rights Museum is built around which site?', ['The Lorraine Motel', 'Beale Street', 'Mason Temple', 'Clayborn Temple'], 'The Lorraine Motel', 'It is where Dr. King was assassinated in 1968.'),
    q('Dr. King came to Memphis in 1968 to support which group of striking workers?', ['Sanitation workers', 'Teachers', 'Dock workers', 'Bus drivers'], 'Sanitation workers', 'Their signs read “I AM A MAN.”'),
    q('Where did Dr. King deliver his “I Have a Dream” speech?', ['The Lincoln Memorial', 'The U.S. Capitol', 'Ebenezer Baptist Church', 'The Edmund Pettus Bridge'], 'The Lincoln Memorial', 'It was the high point of the 1963 March on Washington.'),
    q('Which activist’s 1955 arrest sparked the Montgomery Bus Boycott?', ['Rosa Parks', 'Ella Baker', 'Fannie Lou Hamer', 'Daisy Bates'], 'Rosa Parks', 'The boycott lasted 381 days.'),
    q('Who was called “Moses” for leading enslaved people to freedom?', ['Harriet Tubman', 'Sojourner Truth', 'Ida B. Wells', 'Mary McLeod Bethune'], 'Harriet Tubman', 'She guided dozens of people north on the Underground Railroad.'),
    q('The Greenwood district, known as “Black Wall Street,” was in which city?', ['Tulsa', 'Atlanta', 'Durham', 'Chicago'], 'Tulsa', 'It was destroyed in the 1921 Tulsa Race Massacre.'),
    q('As a 6-year-old in 1960, who integrated a New Orleans elementary school?', ['Ruby Bridges', 'Elizabeth Eckford', 'Linda Brown', 'Claudette Colvin'], 'Ruby Bridges', 'Federal marshals escorted her to class every day.'),
    q('Black History Month grew out of “Negro History Week,” started by which historian?', ['Carter G. Woodson', 'W.E.B. Du Bois', 'Booker T. Washington', 'John Hope Franklin'], 'Carter G. Woodson', 'He launched it in 1926 and is called the father of Black history.'),
    q('Which 1954 Supreme Court case ended legal segregation in public schools?', ['Brown v. Board of Education', 'Plessy v. Ferguson', 'Loving v. Virginia', 'Roe v. Wade'], 'Brown v. Board of Education', 'Thurgood Marshall argued the case before later joining the Court.'),
    q('The Smithsonian’s National Museum of African American History and Culture opened in 2016 in which city?', ['Washington, D.C.', 'Atlanta', 'New York City', 'Philadelphia'], 'Washington, D.C.', 'It sits on the National Mall.'),
    q('How many principles does Kwanzaa celebrate?', ['Seven', 'Five', 'Ten', 'Twelve'], 'Seven', 'One principle for each of the seven nights.'),
    q('The Harlem Renaissance was centered in which city?', ['New York City', 'Chicago', 'Detroit', 'Philadelphia'], 'New York City', 'Langston Hughes and Zora Neale Hurston were among its stars.'),
    q('Madam C. J. Walker built her fortune selling what?', ['Hair care products', 'Insurance', 'Real estate', 'Newspapers'], 'Hair care products', 'She is often called America’s first self-made woman millionaire.'),
    q('Whose autobiography was written with Roots author Alex Haley?', ['Malcolm X', 'Martin Luther King Jr.', 'Medgar Evers', 'Huey P. Newton'], 'Malcolm X', 'It was published in 1965 and is still a classic.')
  ]},
  { category: 'Internet culture', icon: '◎', art: '/art/internet-culture.png', questions: [
    q('If someone says “no cap,” they mean…', ['No lie, I’m serious', 'No hat allowed', 'No limit', 'No comment'], 'No lie, I’m serious', 'Cap means lie. No cap means facts.'),
    q('When a fit is “giving,” it means…', ['It has a strong vibe or energy', 'It was a gift', 'It is too expensive', 'It is going out of style'], 'It has a strong vibe or energy', 'As in: it’s giving main character.'),
    q('If someone “ate and left no crumbs,” they…', ['Did it perfectly', 'Were very hungry', 'Cleaned up after themselves', 'Skipped dinner'], 'Did it perfectly', 'A total serve. Nothing left to critique.'),
    q('Which slang word for charm was Oxford’s 2023 Word of the Year?', ['Rizz', 'Slay', 'Bussin', 'Delulu'], 'Rizz', 'Short for charisma, popularized by streamer Kai Cenat.'),
    q('If the food is “bussin,” it is…', ['Really good', 'Too spicy', 'Cold', 'Overpriced'], 'Really good', 'Bussin bussin means really, really good.'),
    q('Ending a sentence with “periodt” means…', ['End of discussion', 'Ask me later', 'I’m joking', 'Please explain'], 'End of discussion', 'The extra T makes it final.'),
    q('If your friend says they are “finna” do something, they are…', ['About to do it', 'Never going to do it', 'Already done', 'Unsure'], 'About to do it', 'Finna = fixing to.'),
    q('“Spill the tea” means…', ['Share the gossip', 'Make a drink', 'Calm down', 'Apologize'], 'Share the gossip', 'Tea is the juicy details.'),
    q('“Say less” usually means…', ['I got it, no more explanation needed', 'Speak quieter', 'I disagree', 'Talk slower'], 'I got it, no more explanation needed', 'Say less, I’m already on it.'),
    q('The viral “Renegade” dance was created by which Atlanta teen?', ['Jalaiah Harmon', 'Charli D’Amelio', 'Addison Rae', 'Haley Sharpe'], 'Jalaiah Harmon', 'She finally got credit and performed it at the 2020 NBA All-Star Game.'),
    q('The phrase “on fleek” went viral from a 2014 video on which app?', ['Vine', 'Instagram', 'Snapchat', 'Musical.ly'], 'Vine', 'Kayla Newman, aka Peaches Monroee, was talking about her eyebrows.'),
    q('Kai Cenat broke subscriber records streaming on which platform?', ['Twitch', 'YouTube', 'Kick', 'TikTok Live'], 'Twitch', 'His month-long Mafiathon streams made history.'),
    q('Verzuz music battles were created by Swizz Beatz and which producer?', ['Timbaland', 'Pharrell', 'Jermaine Dupri', 'Mannie Fresh'], 'Timbaland', 'They started on Instagram Live during the 2020 lockdowns.'),
    q('The Shade Room became famous posting celebrity news on which platform?', ['Instagram', 'Facebook', 'TikTok', 'Twitter'], 'Instagram', 'Founder Angelica Nwandu started it in 2014.'),
    q('Which star went viral with the phrase “Sorry to this man”?', ['Keke Palmer', 'Taraji P. Henson', 'Tiffany Haddish', 'Issa Rae'], 'Keke Palmer', 'She did not know who Dick Cheney was, and the internet loved it.'),
    q('The famous “Crying Jordan” meme features which athlete?', ['Michael Jordan', 'Michael B. Jordan', 'DeAndre Jordan', 'Jordan Clarkson'], 'Michael Jordan', 'It came from his 2009 Hall of Fame speech.'),
    q('On TikTok, what does “FYP” stand for?', ['For You Page', 'Find Your People', 'Follow Your Passion', 'Feed Your Playlist'], 'For You Page', 'Landing on the FYP is how videos go viral.'),
    q('An “opp” is…', ['An opponent or enemy', 'A job opening', 'A new phone', 'A close friend'], 'An opponent or enemy', 'Keep your circle small, watch the opps.'),
    q('A “situationship” is…', ['A relationship with no clear label', 'A group chat', 'A business deal', 'A long-distance friendship'], 'A relationship with no clear label', 'More than friends, less than official.'),
    q('“Black Twitter” is best described as…', ['A cultural community and conversation online', 'A separate app', 'A news company', 'A paid subscription'], 'A cultural community and conversation online', 'It drives trends, jokes, and accountability far beyond the platform.')
  ]}
];

const hardQuestions = [
  q('Which album won Kendrick Lamar the 2018 Pulitzer Prize for Music?', ['DAMN.', 'To Pimp a Butterfly', 'good kid, m.A.A.d city', 'Mr. Morale & the Big Steppers'], 'DAMN.', 'He was the first artist outside classical and jazz to win it.'),
  q('Beyoncé’s “Break My Soul” samples which 90s house classic?', ['Show Me Love by Robin S.', 'Finally by CeCe Peniston', 'Gypsy Woman by Crystal Waters', 'Vogue by Madonna'], 'Show Me Love by Robin S.', 'It also samples Big Freedia’s “Explode.”'),
  q('Which tennis legend made a surprise crip-walk cameo during Kendrick’s Super Bowl LIX show?', ['Serena Williams', 'Venus Williams', 'Coco Gauff', 'Naomi Osaka'], 'Serena Williams', 'A callback to her 2012 Olympic gold celebration.'),
  q('How many Olympic gold medals has Simone Biles won?', ['7', '5', '6', '9'], '7', 'Four in Rio 2016 and three in Paris 2024.'),
  q('Which musician won Album of the Year at the 2022 Grammys for We Are?', ['Jon Batiste', 'H.E.R.', 'Silk Sonic', 'Leon Bridges'], 'Jon Batiste', 'He won five Grammys that night.'),
  q('Who starred as Ariel in Disney’s 2023 live-action The Little Mermaid?', ['Halle Bailey', 'Chloe Bailey', 'Zendaya', 'Keke Palmer'], 'Halle Bailey', 'Viral videos of little girls reacting to the trailer moved millions.'),
  q('In Jordan Peele’s Us, the doppelgängers are called…', ['The Tethered', 'The Shadows', 'The Others', 'The Hollow'], 'The Tethered', 'They live in tunnels beneath the country.'),
  q('Rihanna’s “Lift Me Up” was written for which film?', ['Black Panther: Wakanda Forever', 'Creed III', 'The Woman King', 'Till'], 'Black Panther: Wakanda Forever', 'It was a tribute to Chadwick Boseman.'),
  q('Which rapper was the first hip-hop artist inducted into the Songwriters Hall of Fame?', ['Jay-Z', 'Nas', 'Missy Elliott', 'Kendrick Lamar'], 'Jay-Z', 'He was inducted in 2017.'),
  q('Which 1991 film made John Singleton the first Black Best Director Oscar nominee?', ['Boyz n the Hood', 'New Jack City', 'Juice', 'Menace II Society'], 'Boyz n the Hood', 'He was also the youngest nominee ever at 24.'),
  q('Who directed the Best Picture winner Moonlight?', ['Barry Jenkins', 'Ryan Coogler', 'Steve McQueen', 'Jordan Peele'], 'Barry Jenkins', 'He also won the Oscar for Adapted Screenplay.'),
  q('Q-Tip, Phife Dawg, and Ali Shaheed Muhammad made up which group?', ['A Tribe Called Quest', 'De La Soul', 'The Roots', 'Black Star'], 'A Tribe Called Quest', 'Their final album hit No. 1 in 2016.'),
  q('Public Enemy’s “Fight the Power” was the anthem of which Spike Lee film?', ['Do the Right Thing', 'Malcolm X', 'She’s Gotta Have It', 'School Daze'], 'Do the Right Thing', 'Radio Raheem’s boombox made it unforgettable.'),
  q('Which NASA mathematician did Taraji P. Henson play in Hidden Figures?', ['Katherine Johnson', 'Dorothy Vaughan', 'Mary Jackson', 'Annie Easley'], 'Katherine Johnson', 'Her calculations helped send John Glenn into orbit.'),
  q('Who was the first Black woman to travel to space?', ['Mae Jemison', 'Stephanie Wilson', 'Jessica Watkins', 'Joan Higginbotham'], 'Mae Jemison', 'She flew on the space shuttle Endeavour in 1992.'),
  q('Michelle Obama’s best-selling 2018 memoir is titled…', ['Becoming', 'Rising', 'The Light We Carry', 'Finding Me'], 'Becoming', 'It became one of the best-selling memoirs in history.'),
  q('Which author of Beloved won the Nobel Prize in Literature?', ['Toni Morrison', 'Alice Walker', 'Maya Angelou', 'Zora Neale Hurston'], 'Toni Morrison', 'She won the Nobel in 1993.'),
  q('Who became the first Black man to win the Wimbledon singles title?', ['Arthur Ashe', 'Yannick Noah', 'James Blake', 'Frances Tiafoe'], 'Arthur Ashe', 'He beat Jimmy Connors in the 1975 final.'),
  q('Who was the first Black woman elected to Congress, then ran for president in 1972?', ['Shirley Chisholm', 'Barbara Jordan', 'Carol Moseley Braun', 'Maxine Waters'], 'Shirley Chisholm', 'Her slogan was “Unbought and Unbossed.”'),
  q('Spike Lee graduated from which HBCU?', ['Morehouse College', 'Howard University', 'Clark Atlanta University', 'Hampton University'], 'Morehouse College', 'His film School Daze was inspired by his time there.')
].map((item) => ({ ...item, category: 'Hard / Sudden death' }));


const ROUND_SECONDS = 75;
const TURN_SIZE = 10; // questions per player turn; each player gets a different set when the bank allows
const SUDDEN_DEATH_POINTS = 2500;
const categories = questionBank.map(({ category, icon, art, questions }) => ({ category, icon, art, questions }));
const state = {
  players: [], playerDraft: ['', ''], categoryIndex: 0, playerIndex: 0, categoryQuestionDeck: [], turnQuestions: [], questionIndex: 0, turnScore: 0, streak: 0, answered: false, timerId: null, turnEndsAt: 0, turnFinished: false,
  deathmatchPlayers: [], deathmatchPlayerIndex: 0, deathmatchQuestions: [], deathmatchQuestionIndex: 0, deathmatchSelections: [null, null], deathmatchAnswered: false, deathmatchRoundResolved: false, deathmatchWinner: null
};
const screens = ['start', 'setup', 'round', 'handoff', 'category-results', 'deathmatch-intro', 'deathmatch', 'deathmatch-pass', 'champion'].reduce((map, name) => { map[name] = document.querySelector(`#${name}-screen`); return map; }, {});
const $ = (selector) => document.querySelector(selector);

function shuffle(items) { return [...items].sort(() => Math.random() - 0.5); }
function escapeHtml(value) { return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character])); }
function formatTime(milliseconds) { const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000)); return `${Math.floor(totalSeconds / 60)}:${String(totalSeconds % 60).padStart(2, '0')}`; }
function showScreen(name) { Object.entries(screens).forEach(([key, element]) => { element.hidden = key !== name; }); $('#app').focus(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function clearTimers() { if (state.timerId) clearInterval(state.timerId); state.timerId = null; }
function currentCategory() { return categories[state.categoryIndex]; }
function currentPlayer() { return state.players[state.playerIndex]; }
function categoryScore(player, category = currentCategory().category) { return player.categoryScores[category] || 0; }
function prepareCategoryQuestionDeck() { state.categoryQuestionDeck = shuffle(currentCategory().questions); }

function renderSetup() {
  $('#roster-count').textContent = `${state.playerDraft.length} / 8 players`;
  $('#player-list').innerHTML = state.playerDraft.map((name, index) => `<div class="player-row"><span class="player-number">${String(index + 1).padStart(2, '0')}</span><input id="player-${index}" class="player-input" type="text" maxlength="22" value="${escapeHtml(name)}" placeholder="Player ${index + 1}" aria-label="Player ${index + 1} name" /><button class="remove-player" type="button" data-remove-player="${index}" aria-label="Remove player ${index + 1}" ${state.playerDraft.length <= 2 ? 'hidden' : ''}>×</button></div>`).join('');
  $('#category-list').innerHTML = categories.map((category, index) => `<span class="category-chip"><img src="${category.art}" alt="" aria-hidden="true" /><span><b>0${index + 1}</b>${category.icon} ${category.category}</span></span>`).join('');
  document.querySelectorAll('.player-input').forEach((input) => input.addEventListener('input', () => { state.playerDraft[Number(input.id.replace('player-', ''))] = input.value; $('#setup-error').textContent = ''; }));
  document.querySelectorAll('[data-remove-player]').forEach((button) => button.addEventListener('click', () => { state.playerDraft.splice(Number(button.dataset.removePlayer), 1); renderSetup(); }));
}
function startTournament() {
  const names = state.playerDraft.map((name) => name.trim()).filter(Boolean);
  if (names.length < 2) { $('#setup-error').textContent = 'Add at least two players to start the tournament.'; $('#player-0').focus(); return; }
  state.players = names.map((name) => ({ name, total: 0, categoryScores: Object.fromEntries(categories.map(({ category }) => [category, 0])), bestStreak: 0, deathmatchScore: 0 }));
  state.categoryIndex = 0; state.playerIndex = 0; prepareCategoryQuestionDeck(); startTurn();
}
function startTurn() {
  clearTimers();
  const deck = state.categoryQuestionDeck; const size = Math.min(TURN_SIZE, deck.length); const start = (state.playerIndex * size) % deck.length;
  state.turnQuestions = Array.from({ length: size }, (_, i) => deck[(start + i) % deck.length]); state.questionIndex = 0; state.turnScore = 0; state.streak = 0; state.answered = false; state.turnFinished = false; state.turnEndsAt = Date.now() + ROUND_SECONDS * 1000;
  showScreen('round'); renderRoundQuestion(); updateRoundTimer(); state.timerId = setInterval(updateRoundTimer, 250);
}
function updateRoundTimer() {
  if (state.turnFinished) return;
  const remaining = state.turnEndsAt - Date.now(); const progress = Math.max(0, remaining / (ROUND_SECONDS * 1000));
  $('#timer-value').textContent = formatTime(remaining); $('#timer-bar').style.width = `${progress * 100}%`; $('#timer-bar').classList.toggle('urgent', remaining <= 30000);
  if (remaining <= 0) finishTurn('time');
}
function renderRoundQuestion() {
  const question = state.turnQuestions[state.questionIndex]; const category = currentCategory(); const player = currentPlayer(); const number = state.questionIndex + 1;
  $('#round-player-name').textContent = player.name; $('#turn-order').textContent = `Player ${state.playerIndex + 1} / ${state.players.length}`; $('#round-category-label').textContent = category.category; $('#round-question-label').textContent = `Question ${String(number).padStart(2, '0')} / ${String(state.turnQuestions.length).padStart(2, '0')}`; $('#round-progress-bar').style.width = `${(number / state.turnQuestions.length) * 100}%`; $('#round-question-number').textContent = String(number).padStart(2, '0'); $('#round-question-total').textContent = String(state.turnQuestions.length).padStart(2, '0'); $('#round-question-category').textContent = category.category.toUpperCase(); $('#round-category-art').src = category.art; $('#round-category-art').alt = `${category.category} illustration`; $('#round-question').textContent = question.text; $('#round-feedback').hidden = true; $('#round-next-button').hidden = true;
  $('#round-answers').innerHTML = shuffle(question.answers).map((answer, index) => `<button class="answer-button" type="button" data-answer="${encodeURIComponent(answer)}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span class="answer-text">${escapeHtml(answer)}</span></button>`).join('');
  document.querySelectorAll('#round-answers .answer-button').forEach((button) => button.addEventListener('click', () => answerRoundQuestion(button, question)));
}
function answerRoundQuestion(button, question) {
  if (state.answered || state.turnFinished) return;
  state.answered = true; const selected = decodeURIComponent(button.dataset.answer); const isCorrect = selected === question.correct;
  document.querySelectorAll('#round-answers .answer-button').forEach((choice) => { choice.disabled = true; if (decodeURIComponent(choice.dataset.answer) === question.correct) choice.classList.add('reveal'); });
  if (isCorrect) { state.streak += 1; state.turnScore += 100 + Math.max(0, state.streak - 1) * 25; state.players[state.playerIndex].categoryScores[currentCategory().category] += 100 + Math.max(0, state.streak - 1) * 25; state.players[state.playerIndex].total += 100 + Math.max(0, state.streak - 1) * 25; state.players[state.playerIndex].bestStreak = Math.max(state.players[state.playerIndex].bestStreak, state.streak); button.classList.remove('reveal'); button.classList.add('correct'); $('#round-feedback-title').textContent = state.streak > 1 ? `Correct — ${state.streak} in a row!` : 'Correct!'; $('#round-feedback-icon').textContent = '✓'; $('#round-feedback-copy').textContent = `${100 + Math.max(0, state.streak - 1) * 25} points. ${question.note}`; } else { state.streak = 0; button.classList.add('incorrect'); $('#round-feedback-title').textContent = 'Not quite.'; $('#round-feedback-icon').textContent = '↗'; $('#round-feedback-copy').textContent = `The answer is ${question.correct}. ${question.note}`; }
  $('#round-feedback').hidden = false; $('#round-next-button').hidden = false; $('#round-next-button').focus();
}
function nextRoundQuestion() { if (state.questionIndex >= state.turnQuestions.length - 1) finishTurn('complete'); else { state.questionIndex += 1; state.answered = false; renderRoundQuestion(); $('#round-question').focus(); } }
function finishTurn(reason) {
  if (state.turnFinished) return; state.turnFinished = true; clearTimers();
  const player = currentPlayer(); const category = currentCategory(); const hasNextPlayer = state.playerIndex < state.players.length - 1; $('#handoff-message').textContent = reason === 'time' ? `${player.name} ran out of time in ${category.category}.` : `${player.name} cleared the ${category.category} questions.`; $('#handoff-score').textContent = String(state.turnScore).padStart(3, '0'); $('#handoff-detail').textContent = hasNextPlayer ? `${state.players[state.playerIndex + 1].name} is next up.` : 'That closes the category for everyone.'; $('#handoff-button').textContent = hasNextPlayer ? `Pass to ${state.players[state.playerIndex + 1].name} →` : 'See category standings →'; showScreen('handoff');
}
function advanceAfterTurn() { if (state.playerIndex < state.players.length - 1) { state.playerIndex += 1; startTurn(); } else showCategoryResults(); }
function showCategoryResults() {
  const category = currentCategory(); const sorted = [...state.players].sort((a, b) => b.total - a.total); $('#category-results-title').innerHTML = `${category.category.replace(' + ', '<br />')}<br /><em>complete.</em>`; $('#category-results-message').textContent = `Here is where the standings sit after ${category.category}.`; $('#category-standings').innerHTML = sorted.map((player, index) => `<div class="standing-row"><div><span class="place-number">${String(index + 1).padStart(2, '0')}</span><strong>${escapeHtml(player.name)}</strong></div><div><span>${categoryScore(player, category.category)} pts</span><strong>${player.total}</strong></div></div>`).join(''); $('#next-category-button').textContent = state.categoryIndex < categories.length - 1 ? `Start ${categories[state.categoryIndex + 1].category} →` : 'Enter the death match →'; showScreen('category-results'); }
function advanceAfterCategory() { if (state.categoryIndex < categories.length - 1) { state.categoryIndex += 1; state.playerIndex = 0; prepareCategoryQuestionDeck(); startTurn(); } else beginDeathmatch(); }
function beginDeathmatch() { clearTimers(); state.deathmatchPlayers = [...state.players].sort((a, b) => b.total - a.total).slice(0, 2); state.deathmatchQuestions = shuffle(hardQuestions); state.deathmatchPlayerIndex = 0; state.deathmatchQuestionIndex = 0; state.deathmatchSelections = [null, null]; state.deathmatchRoundResolved = false; state.deathmatchWinner = null; state.deathmatchPlayers.forEach((player) => { player.deathmatchScore = 0; }); $('#finalist-preview').innerHTML = state.deathmatchPlayers.map((player, index) => `<div class="finalist-card"><span class="place-number">0${index + 1}</span><strong>${escapeHtml(player.name)}</strong><span>${player.total} total points</span></div>`).join('<div class="versus">VS</div>'); showScreen('deathmatch-intro'); }
function startDeathmatchTurn() {
  clearTimers(); state.deathmatchPlayerIndex = 0; state.deathmatchQuestionIndex = 0; state.deathmatchSelections = [null, null]; state.deathmatchAnswered = false; state.deathmatchRoundResolved = false; state.deathmatchWinner = null; showScreen('deathmatch'); renderDeathmatchQuestion();
}
function renderDeathmatchQuestion() {
  const question = state.deathmatchQuestions[state.deathmatchQuestionIndex % state.deathmatchQuestions.length]; const player = state.deathmatchPlayers[state.deathmatchPlayerIndex]; const questionNumber = (state.deathmatchQuestionIndex % state.deathmatchQuestions.length) + 1;
  $('#deathmatch-player-name').textContent = player.name; $('#deathmatch-turn-order').textContent = `Finalist ${state.deathmatchPlayerIndex + 1} / 2`; $('#deathmatch-question-label').textContent = `Question ${String(questionNumber).padStart(2, '0')}`; $('#deathmatch-progress-bar').style.width = `${(questionNumber / state.deathmatchQuestions.length) * 100}%`; $('#deathmatch-question-number').textContent = String(questionNumber).padStart(2, '0'); $('#deathmatch-question-category').textContent = question.category.toUpperCase(); $('#deathmatch-question').textContent = question.text; $('#deathmatch-feedback').hidden = true; $('#deathmatch-reveal').hidden = true; $('#deathmatch-next-button').hidden = true;
  $('#deathmatch-answers').innerHTML = shuffle(question.answers).map((answer, index) => `<button class="answer-button" type="button" data-answer="${encodeURIComponent(answer)}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span class="answer-text">${escapeHtml(answer)}</span></button>`).join('');
  document.querySelectorAll('#deathmatch-answers .answer-button').forEach((button) => button.addEventListener('click', () => answerDeathmatchQuestion(button, question)));
}
function answerDeathmatchQuestion(button, question) {
  if (state.deathmatchAnswered || state.deathmatchRoundResolved) return;
  state.deathmatchAnswered = true; const selected = decodeURIComponent(button.dataset.answer); state.deathmatchSelections[state.deathmatchPlayerIndex] = selected;
  document.querySelectorAll('#deathmatch-answers .answer-button').forEach((choice) => { choice.disabled = true; if (choice === button) choice.classList.add('locked'); });
  $('#deathmatch-feedback').hidden = false; $('#deathmatch-feedback-title').textContent = 'Answer locked.'; $('#deathmatch-feedback-icon').textContent = '✓'; $('#deathmatch-feedback-copy').textContent = `${state.deathmatchPlayers[state.deathmatchPlayerIndex].name} has locked an answer. The correct answer stays hidden until both finalists submit.`;
  if (state.deathmatchPlayerIndex === 0) { $('#deathmatch-pass-message').textContent = `${state.deathmatchPlayers[0].name} locked an answer. Pass the deck to ${state.deathmatchPlayers[1].name} for the same question.`; $('#deathmatch-pass-score').textContent = 'LOCKED'; $('#deathmatch-pass-button').textContent = `Start ${state.deathmatchPlayers[1].name}'s lock-in →`; showScreen('deathmatch-pass'); } else { $('#deathmatch-next-button').textContent = 'Reveal both answers →'; $('#deathmatch-next-button').hidden = false; $('#deathmatch-next-button').focus(); }
}
function startSecondDeathmatchLockIn() { state.deathmatchPlayerIndex = 1; state.deathmatchAnswered = false; showScreen('deathmatch'); renderDeathmatchQuestion(); }
function resolveDeathmatchQuestion() {
  const question = state.deathmatchQuestions[state.deathmatchQuestionIndex % state.deathmatchQuestions.length]; const [first, second] = state.deathmatchPlayers; const [firstAnswer, secondAnswer] = state.deathmatchSelections; const firstCorrect = firstAnswer === question.correct; const secondCorrect = secondAnswer === question.correct;
  document.querySelectorAll('#deathmatch-answers .answer-button').forEach((choice) => { const value = decodeURIComponent(choice.dataset.answer); choice.disabled = true; if (value === question.correct) choice.classList.add('reveal'); if (value === secondAnswer) choice.classList.add('locked'); });
  $('#deathmatch-reveal').innerHTML = `<div class="reveal-card ${firstCorrect ? 'is-correct' : 'is-miss'}"><span>${escapeHtml(first.name)} locked</span><strong>${escapeHtml(firstAnswer)}</strong><b>${firstCorrect ? 'Correct' : 'Miss'}</b></div><div class="reveal-card ${secondCorrect ? 'is-correct' : 'is-miss'}"><span>${escapeHtml(second.name)} locked</span><strong>${escapeHtml(secondAnswer)}</strong><b>${secondCorrect ? 'Correct' : 'Miss'}</b></div>`; $('#deathmatch-reveal').hidden = false; $('#deathmatch-feedback').hidden = false; state.deathmatchRoundResolved = true;
  if (firstCorrect !== secondCorrect) { const winner = firstCorrect ? first : second; winner.deathmatchScore = SUDDEN_DEATH_POINTS; state.deathmatchWinner = winner; $('#deathmatch-feedback-title').textContent = `${winner.name} wins sudden death!`; $('#deathmatch-feedback-icon').textContent = '✓'; $('#deathmatch-feedback-copy').textContent = `${winner.name} locked ${question.correct}. That answer is worth ${SUDDEN_DEATH_POINTS.toLocaleString()} points.`; $('#deathmatch-next-button').textContent = 'Crown the winner →'; } else if (firstCorrect) { $('#deathmatch-feedback-title').textContent = 'Both finalists were correct.'; $('#deathmatch-feedback-icon').textContent = '↗'; $('#deathmatch-feedback-copy').textContent = `The answer was ${question.correct}. Sudden death continues with another hard question.`; $('#deathmatch-next-button').textContent = 'Next sudden-death question →'; } else { $('#deathmatch-feedback-title').textContent = 'No winner yet.'; $('#deathmatch-feedback-icon').textContent = '↗'; $('#deathmatch-feedback-copy').textContent = `The correct answer was ${question.correct}. Both finalists missed, so sudden death continues.`; $('#deathmatch-next-button').textContent = 'Next sudden-death question →'; }
  $('#deathmatch-next-button').hidden = false; $('#deathmatch-next-button').focus();
}
function nextDeathmatchQuestion() {
  if (!state.deathmatchAnswered) return;
  if (!state.deathmatchRoundResolved) { if (state.deathmatchPlayerIndex === 1) resolveDeathmatchQuestion(); return; }
  if (state.deathmatchWinner) { renderChampion(); return; }
  state.deathmatchQuestionIndex += 1; state.deathmatchPlayerIndex = 0; state.deathmatchSelections = [null, null]; state.deathmatchAnswered = false; state.deathmatchRoundResolved = false; showScreen('deathmatch'); renderDeathmatchQuestion(); $('#deathmatch-question').focus();
}
function renderChampion() { const [first, second] = [...state.deathmatchPlayers].sort((a, b) => b.deathmatchScore - a.deathmatchScore); const isTie = first.deathmatchScore === second.deathmatchScore; $('#winner-name').textContent = isTie ? 'Shared crown' : first.name; $('#winner-score').textContent = String(first.deathmatchScore).padStart(3, '0'); $('#champion-message').textContent = isTie ? `${first.name} and ${second.name} finished level in sudden death.` : `${first.name} won sudden death and the Culture Deck crown.`; $('#final-scoreboard').innerHTML = `<div><span>Finalist</span><strong>${escapeHtml(first.name)}</strong><b>${first.deathmatchScore}</b></div><div><span>Finalist</span><strong>${escapeHtml(second.name)}</strong><b>${second.deathmatchScore}</b></div>`; showScreen('champion'); }

function resetTournament() { clearTimers(); state.playerDraft = state.players.map((player) => player.name); if (state.playerDraft.length < 2) state.playerDraft = ['', '']; renderSetup(); showScreen('setup'); }

$('#start-button').addEventListener('click', () => { renderSetup(); showScreen('setup'); });
$('#add-player-button').addEventListener('click', () => { if (state.playerDraft.length < 8) { state.playerDraft.push(''); renderSetup(); document.querySelector(`#player-${state.playerDraft.length - 1}`).focus(); } });
$('#start-tournament-button').addEventListener('click', startTournament);
$('#round-next-button').addEventListener('click', nextRoundQuestion);
$('#handoff-button').addEventListener('click', advanceAfterTurn);
$('#next-category-button').addEventListener('click', advanceAfterCategory);
$('#start-deathmatch-button').addEventListener('click', startDeathmatchTurn);
$('#deathmatch-next-button').addEventListener('click', nextDeathmatchQuestion);
$('#deathmatch-pass-button').addEventListener('click', startSecondDeathmatchLockIn);
$('#play-again-button').addEventListener('click', () => { state.playerDraft = state.players.map((player) => player.name); renderSetup(); startTournament(); });
$('#new-tournament-button').addEventListener('click', resetTournament);
document.addEventListener('keydown', (event) => { if (event.key === 'Enter' && event.target.matches('.answer-button')) event.target.click(); if (event.key.toLowerCase() === 'n' && !screens.round.hidden && !$('#round-next-button').hidden && !event.target.matches('input, textarea')) nextRoundQuestion(); });
showScreen('start');
window.__cultureDeckReady = true;
