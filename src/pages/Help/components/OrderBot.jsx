import orderJPG from "./../../../assets/ordering.jpg";
const OrderBot = () => {
  return (
    <div className="w-full md:">
      <img
        src={orderJPG}
        loading="lazy"
        alt="ordering picture"
        className="w-full"
      />
      <ol className="list-decimal mt-5 ps-3">
        <li>
          Make sure you have Sari Buana account and verified WhatsApp number
        </li>
        <li>
          send message with key &quot;order&quot; to number{" "}
          <strong>6285951191688</strong> or{" "}
          <a
            rel="no-referrer"
            href="https://wa.me/6285951191688"
            className="text-red-600 font-semibold"
          >
            click here
          </a>
        </li>
        <li>Select template you want to use to make order</li>
        <li>Download the file Bot sent, then edit the product quantity</li>
        <li>Save the file and send it back to bot</li>
        <li>Your order will proceed by Sari Buana </li>
      </ol>
    </div>
  );
};

export default OrderBot;
