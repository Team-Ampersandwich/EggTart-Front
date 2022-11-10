import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EachPost from './EachPost';

const initialPostList = [
    {id : 1, title : '리액트 공부는 재미있어.', replCount : 1},
    {id : 2, title : '프론트 공부 열심히 해.', replCount : 43},
    {id : 3, title : '파이팅^^.', replCount : 1},
];


function ShowPostList(){
    const [loading, setLoading] = useState(false);
    const [isPost, setIsPost] = useState(false)
    const [postList, setPostList] = useState(initialPostList);

    const addPost = () => {
        setPostList((postList) => [
            ...postList, {id : 4, title :'공부는 열심히 하면 좋아.', replCount : 21},
        ]);
    };
    
    const navigate = useNavigate();

    const goWrite = () => {
        navigate('/write');
    };

    export const CursorDiv = styled.div;

    useEffect(() => {
        setTimeout(() => {
            setPostList(initialPostList)
            setLoading(false);
        }, 5000)
    },[]); 
    

    <PostListDiv>
    {loading ? (
            <LoadingDiv>
                <LoadingImg src = {'./loading.svg'}/>
            </LoadingDiv>
        ) : isPost ? (
                <LoadingDiv>
                    아직 기록된 글이 없습니다.
                </LoadingDiv>
        ) : (
            <ul>
                {postList.map((element) => (
                    <EachPost 
                    key={element.id} 
                    title = {element.title}
                    replCount = {element.replCount}
                    />
                ))}
            </ul>
        )}
    </PostListDiv>

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

    const postData = {
        title: `바운스`,
        contents: `아기사자가 돌아서면 두 눈이 마주칠까, 심장이 bounce, bounce 두근 대 들릴까 봐 겁나
        한참을 망설이다 용기를 내 밤새워 준비한 내 개사 들어줘, 처음 본 순간부터 아기사자랑 친해질꺼야 생각했어~~,
        Baby, you're my trampoline You make me bounce Bounde - 아기사자들은 다 귀여워 최고 -
        `,
      };
      
      const replData = [
        { id: 2, content: `반가워요!` },
        { id: 3, content: `멋쟁이 사자처럼 최고!` },
      ];
      
      const ShowPost = () => {
        const [post, setPost] = useState(null);
        const [repls, setRepls] = useState([]);
        const [postLoading, setPostLoading] = useState(true);
        const [replLoading, setReplLoading] = useState(true);
      
        useEffect(() => {
            setTimeout(() => {
                setPost(postData);
                setPostLoading(false);
            }, 1000);
          });
         
          useEffect(() => {
            setTimeout(() => {
                setRepls(replData);
                setReplLoading(false);
            }, 3000);
          });
          return (
            <div>
              <PostSection>
                <PostTitleDiv>
                  <PostTitle>{post && post.title}</PostTitle>
                </PostTitleDiv>
        
                {postLoading ? (
                  <LoadingDiv>
                    <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
                  </LoadingDiv>
                ) : (
                  <PostReplDiv>{post && post.contents}</PostReplDiv>
                )}
        
                {/* post contents */}
        
                <ReplTitleDiv>댓글 {replCount} </ReplTitleDiv>
                {replLoading ? (
                  <LoadingDiv>
                    <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
                  </LoadingDiv>
                ) : (
                  repls &&
                  repls.map((element) => (
                    <PostReplDiv key={element.id}>
                      <ReplWriter>익명</ReplWriter>
                      <Repl>{element.content}</Repl>
                    </PostReplDiv>
                  ))
                )}
        
                <WriterDiv>
                  <ReplInput onChange = {onChange} value = {repl}></ReplInput>
                  <ReplSubmitDiv>
                    <span>입력</span>
                  </ReplSubmitDiv>
                </WriterDiv>
              </PostSection>
            </div>
          );
        };
        
        export default ShowPost;

        const countRepls = (repls) => {
            console.log('리뷰 개수를 세는 중...');
            return repls.length;
          }
        
          const replCount = countRepls(repls);

          const countRepls = (repls) => {
            console.log('리뷰 개수를 세는 중...');
            return repls.length;
          }
        
          const replCount = useMemo(() => countRepls(repls), [repls]);