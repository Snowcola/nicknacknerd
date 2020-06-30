import React from 'react'
import PropTypes from 'prop-types'

const SoundCloudEmbed = ({ podcast }) => {



    if (podcast && podcast.length) {
        //const url = podcast.split("src=")[1].split("></")[0].replace(/"/g, '')
        const url = podcast.split("src=")[1].split(" ")[0].replace(/"/g, '')

        return (
            <div>

                <iframe width="100%"
                    height="200"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    title="podcast-embed"
                    src={url}>

                </iframe>

            </div>
        )
    }
    return (<div></div>)
}

SoundCloudEmbed.propTypes = {
    podcast: PropTypes.string
}

export default SoundCloudEmbed
