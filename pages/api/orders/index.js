import { connect } from "../../../utils/mongoConnect";
import { Orders } from "../../../models/Orders";

export default async function handler(req, res) {

    await connect();

    const orders = await Orders.find({});

    res.status(200).json(orders);
}
  