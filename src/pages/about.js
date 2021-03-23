import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import { Box, Text } from 'grommet'

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="About Me: Christopher Herrera" />
      <p>
        Hi, it's Chris. I am a self-taught programmer, data analyst, and data
        visualization developer from the Philippines, working remotely most of
        the time. First of all, thank you for taking the time to read my blog.
      </p>
      <h3>About Me</h3>
      <p> Here are a few things about me...</p>
      <Box direction="column" flex>
        <Box direction="row" gap="medium" justify="between">
          <Box gap="small" width="50%">
            <Text weight="bold">Weight Lifter</Text>
            <p>
              Ever since high school, I've always been into exercising. It only
              started in college when I wanted to start bulking up. I'm a true
              believer of the StrongLifts routine, and believe you always need
              to lift heavier on your next session.
            </p>
          </Box>
          <Box gap="small" width="50%">
            <Text weight="bold">Reader</Text>
            <p>
              I'm a big fan of reading non-fiction. I love new ideas that can
              change my perspective. I'll soon create my own personal reading
              list from a wide range of categories including business,
              psychology, and self-help.
            </p>
          </Box>
        </Box>
        <Box direction="row" gap="medium" justify="between">
          <Box gap="small" width="50%">
            <Text weight="bold">Learner</Text>
            <p>
              I love learning new things. I'm a firm believer of concept of{' '}
              <a href="https://jamesclear.com/continuous-improvement">
                1% improvement
              </a>{' '}
              each day. I try to seek out a sense of progression in any area of
              my life whether it's weight lifting, cooking, or programming.
            </p>
          </Box>
          <Box gap="small" width="50%">
            <Text weight="bold">Cooking</Text>
            <p>
              There's something about cooking that feels so meditative. I
              wouldn't say I'm a great cook, but I fell in love with the
              process. Japanese cuisine is my speciality and favorite, but I try
              to learn new recipes from time-to-time
            </p>
          </Box>
        </Box>
      </Box>
      <strong> </strong>
    </Layout>
  )
}

export default About
