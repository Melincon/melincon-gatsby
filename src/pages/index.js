import * as React from "react"
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Divider} from 'semantic-ui-react'
import GreatWave from '../images/tall-tower.png'
import Layout from "../components/layout"

// markup
export default function Index(){
  return (
    <Layout>
        <Image src={GreatWave} />
        <Divider />
        <Grid columns={2} divided relaxed='very'>
          <Grid.Column>
            <Grid.Row>
              <p>
                Melincon is a vision. I hope to grow this project into the "Technology Group" that I imagine it becomes. Within the confines of this site you will see references to "Sites" and "Software". I hope my developing expertise on these two items will be a major selling point for this company. Data is what makes the world work, and what I have certainly worked with the most in my almost 25 short years.
              </p>
              <br />
            </Grid.Row>
            <Grid.Row>
              <p>
                Mathematics is something that I hold very dear to my heart. I adore both its Theoretical and Applied sides. Math is something that I would love to encompass with websites, you can expect to see certain pages devoted to certain facets of Mathematics. It is an ideal of mine that my life should be spent collecting and archiving information for the next generation. If I apply myself perhaps I can broaden the horizons of my favorite subject.
              </p>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
              <p>
                Many sites linked from here fall under some sort of "Business Endeavor". These are some sort of million dollar idea thing that pops into my head. I figure why not build a site for these things to enhance my site building expertise, let others decide if those ideas are good or not. Some of these projects will be close to the hobby side. Either way im sure I will find some way to strengthen myself from either proper SEO implementation or advertisements.
              </p>
              <br />
            </Grid.Row>
            <Grid.Row>
              <p>
                My hopes are that this parent site will serve as a clear indicator of the path my life followed. I have hopes to become an actuary and earn a PHD in some facet of Mathematics. Hopefully I can continue to contribute to this parent project along the way as well. One day I hope people say "I want a Melincon site".
              </p>
            </Grid.Row>
          </Grid.Column>
        </Grid>
    </Layout>
  )
}
