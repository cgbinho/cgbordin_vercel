import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import { OrderCard } from '../../components/Orders/OrderCard';
import { Container } from '../../styles/home';
import { EmptyCard } from '../../components/Orders/EmptyCard';
import { getSession } from 'next-auth/client';

// import {signIn, Si}
const Orders = ({ content, orders, err }) => {
  // const { user, isLoading, isError, signUp } = useAuth();

  const hasItems = orders?.items?.[0];
  console.log({ orders });
  console.log({ err });

  return (
    <Layout>
      <Head>
        <title>CGBORDIN.com - {content.title}</title>
      </Head>
      <Container>
        <h1>{content.title}</h1>
        <div className="content">
          {!hasItems ? (
            <EmptyCard {...{ content }} />
          ) : (
            <>
              {orders.items.map((order) => (
                <OrderCard
                  key={order.id}
                  {...{
                    content,
                    order,
                  }}
                />
              ))}
            </>
          )}
        </div>
      </Container>
    </Layout>
  );
};

// We are getting the project with an authenticated user, serverside. Beautiful:
export async function getServerSideProps({ req, params, locale }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }

  const content = (await import(`../../locales/${locale}/orders.js`)).default;

  return { props: { content } };

  // // get orders:
  // const SSR = withSSRContext({ req });

  // try {
  //   const orders = (await SSR.API.graphql({
  //     query: getOrdersByUserID,
  //     authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  //     variables: {
  //       userID: user.id,
  //     },
  //   })) as { data: GetOrdersByUserIDQuery };

  //   return {
  //     props: {
  //       orders: orders.data.getOrdersByUserID,
  //       content,
  //     },
  //   };
  // } catch (err) {
  //   console.log(err);
  //   return {
  //     props: {
  //       orders: null,
  //       err,
  //       content,
  //     },
  //   };
  // }
}

export default Orders;
