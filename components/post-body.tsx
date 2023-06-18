import markdownStyles from './markdown-styles.module.css'
import classNames from "classnames";

type Props = {
    content: string,
    wide?: boolean
}

const PostBody = ({content, wide}: Props) => {
    return (
        <div className={classNames("prose lg:prose-xl mx-auto", {
            "max-w-3xl": !wide,
            "max-w-full": wide,
        })}>
            <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{__html: content}}
            />
        </div>
    )
}

export default PostBody
