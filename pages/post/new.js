import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../../components/AppLayout';

export default function NewPost(props) {
  console.log('NEW POST PROPS: ',props);
  const handleClick = async () => {
    const response = await fetch(`/api/generatePost`, {
      method: "POST"
    });
    const json = await response.json()
    console.log("RESULT: ", json)
  }
  return (
    <div>
      <h1>This is the new post page</h1>
      <button className='btn' onClick={handleClick}>Generate</button>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {}
  }
})

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>
}