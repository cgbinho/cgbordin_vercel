import aws from 'aws-sdk';

aws.config.update({ region: 'us-east-1' });

// Save order to DB:
export const postOrder = async ({
  id,
  userID,
  userEmail,
  product,
  code,
  amount,
  currency,
  orderStatus,
  createdOn,
  updatedOn,
}) => {
  const docClient = new aws.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
  });

  const params = {
    TableName: process.env.DYNAMODB_ORDER_TABLE,
    Item: {
      id,
      userID,
      userEmail,
      product,
      code,
      amount,
      currency,
      orderStatus,
      createdOn,
      updatedOn,
      // createdAt: Date.now(),
      // updatedAt: Date.now(),
    },
  };

  // create a promise:
  const createOrder = docClient.put(params).promise();
  // return the promise resolved.
  return createOrder
    .then((data) => {
      return [data, null];
    })
    .catch((err) => {
      return [null, err];
    });
};

export const updateOrder = async ({ id, code, orderStatus, updatedOn }) => {
  const docClient = new aws.DynamoDB.DocumentClient();

  const params = {
    TableName: process.env.DYNAMODB_ORDER_TABLE,
    Key: {
      id,
    },
    UpdateExpression: 'set code = :r, orderStatus=:p, updatedOn=:q',
    ExpressionAttributeValues: {
      ':r': code,
      ':p': orderStatus,
      ':q': updatedOn,
    },
    ReturnValues: 'UPDATED_NEW',
  };

  // create a promise:
  const updateOrder = docClient.update(params).promise();
  // return the promise resolved.
  return updateOrder
    .then((data) => {
      // console.log('UpdateItem succeeded:', JSON.stringify(data, null, 2));
      return [data, null];
    })
    .catch((err) => {
      console.error(
        'Unable to update item. Error JSON:',
        JSON.stringify(err, null, 2)
      );
      return [null, err];
    });
};
