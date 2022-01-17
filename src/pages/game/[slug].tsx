import Game, { GameTemplateProps } from 'templates/Game';
import galleryMock from 'components/Gallery/mock';

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

// Gerar em build time
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'the-witcher-3-wild-hunt' } }],
    fallback: false
  }
}

export async function getStaticProps() {

  const descriptionHTML =
    `
    <div class="content-summary-section content-summary-offset" content-summary-section-id="description">
    <div class="description">
    <br><br>
    <img src="https://items.gog.com/witcher/W3-GOTY-Edition-Banner-Source_970px_EN.png">
    <br><br>
    <img src="https://items.gog.com/witcher/1. About the game v2_EN.png">
    <br><br>
    <b>
      <i>
        Features:
      </i>
    </b>
    <br><br>
    <img src="https://items.gog.com/witcher/2. Monster Slayer_EN.png">
    <br><br>
    ● Gruesomely destroy foes as a professional monster hunter armed with a range of upgradeable weapons, mutating
    potions, and combat magic.
    <br>
    ● Hunt down a wide variety of exotic monsters, from savage beasts prowling mountain passes to cunning supernatural
    predators lurking in the shadowy back alleys of densely populated cities.
    <br>
    ● Invest your rewards to upgrade your weaponry and buy custom armor, or spend them on horse races, card games, fist
    fighting and other pleasures life brings.
    <br><br>
    <img src="https://items.gog.com/witcher/3. Open World_EN.png">
    <br><br>
    ● Traverse a fantastical open world: explore forgotten ruins, caves and shipwrecks, trade with merchants and dwarven
    smiths in cities, and hunt across open plains, amidst mountains and at sea.
    <br>
    ● Make choices that go beyond good and evil and face their far-reaching consequences.
    <br><br>
    <img src="https://items.gog.com/witcher/4. Child of Prophercy_EN.png">
    <br><br>
    ● In a time of war, track down the child of prophecy, a living weapon of great power whose coming was foretold in
    ancient elven legends.
    <br><br>
    <img src="https://items.gog.com/witcher/5. GOTY_EN.png">
    <br><br>
    ● Includes the Hearts of Stone and Blood &amp; Wine expansions, which offer a massive 50 hours of additional
    storytelling as well as new features and new areas that expand the explorable world by over a third!
    <br>
    ● Affords access to all additional content released so far, including weapons, armor, side quests, game modes and
    new GWENT cards!
    <br>
    ● Features all technical and visual updates as well as a new user interface completely redesigned on the basis of
    feedback from members of the Witcher Community.
    <br>
    <p class="description__copyrights">
      The Witcher 3: Wild Hunt © 2016 CD Projekt S.A. All Rights Reserved.
    </p>
  </div>
</div>
  `

  return {
    props: {
      cover: 'https://i.ytimg.com/vi/NRpNHcniTfE/maxresdefault.jpg',
      gameInfo: {
        title: 'The Witcher 3 - Wild Hunt',
        price: '59.00',
        description: 'Play the most polished and complete version of the most awarded game of 2015 - The Witcher 3: Wild Hunt – Game of the Year Edition. Now available with all expansions and additional content.'
      },
      gallery: galleryMock,
      description: descriptionHTML
    }
  }
}