import Image from '../../components/core/Image'
import Heading from '../../components/core/Heading'
import Button from '../../components/core/Button'
import Text from '../../components/core/Text'
import Time from '../../components/core/Time'
import View from '../../components/library/View'

import logic from '../../logic'


function Post({ post, onPostDeleted, onPostLikeToggled }) {
    console.log('Post -> render')

    const handleDeletePost = () => {
        if (confirm('Delete post?'))
            try {
                logic.deletePost(post.id, error => {
                    if (error) {
                        console.error(error)

                        alert(error.message)

                        return
                    }

                    onPostDeleted()
                })
            } catch (error) {
                console.error(error)

                alert(error.message)
            }
    }

    const handleToggleLikePost = () => {
        try {
            logic.toggleLikePost(post.id, error => {
                if (error) {
                    console.error(error)

                    alert(error.message)

                    return
                }

                onPostLikeToggled()
            })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    return <View tag="article" aling="">
        <View direction="row">
            <Text>{post.author}</Text>

            <Heading level="2">{post.title}</Heading>
        </View>

        <Image src={post.image} />

        <Text>{post.description}</Text>

        <View direction='row'>
            <Button onClick={handleToggleLikePost}>{`${post.likes.includes(logic.getUserUsername()) ? '❤️' : '🤍'} ${post.likes.length} like${post.likes.length === 1 ? '' : 's'}`}</Button>
        </View>

        <View direction="row">
            <Time>{post.date}</Time>

            {post.author === logic.getUserUsername() && <Button onClick={handleDeletePost}>Delete</Button>}
        </View>
    </View>
}

export default Post