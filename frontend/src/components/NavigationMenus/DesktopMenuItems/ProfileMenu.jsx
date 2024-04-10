function ProfileMenu() {
  return (
    <div className="w-full h-full border p-6 bg-white fade-in-navigation-menu flex flex-col gap-4 z-10">
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="font-bold text-textmedium">Welcome</h1>
          <p>To access account and manage orders</p>
        </div>

        <button className="px-4 py-2 text-pink-600 border font-bold w-48 hover:border-pink-600 rounded">
          LOGIN/SIGNUP
        </button>
      </div>
      <hr />
      <div>
        <ul className="flex flex-col gap-2">
          <li>Orders</li>
          <li>Wishlist</li>
          <li>Gift Cards</li>
          <li>Contact Us</li>
          <li>Myntra Insider</li>
        </ul>
      </div>
      <hr />
      <div>
        <ul className="flex flex-col gap-2">
          <li>Myntra Credit</li>
          <li>Coupons</li>
          <li>Saved Cards</li>
          <li>Saved VPA</li>
          <li>Saved Addresses</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileMenu;
