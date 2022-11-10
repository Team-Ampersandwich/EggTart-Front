function EachPost({title, postID}) {
    const navigate = useNavigate();
    const goPost = () => {
        navigate(`${'/post/' + postID }`);
    };
    return (
        <EachPostLi onClick={goPost}>
            <div>
                <FontAwesomeIcon icon ={faLocationPin} />
                <PostLink>
                    {title}
                </PostLink>
            </div>
        </EachPostLi>
    );
}