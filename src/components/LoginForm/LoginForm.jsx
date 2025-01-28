import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const LoginForm = () => {
  const { user, createUserByGoogle } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#09122C]">
      <div className="bg-[#5C7285] p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6 text-black">
          Login
        </h2>

        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-black font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-black font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-black font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
            Login
          </button>
        </form>
        <div onClick={createUserByGoogle} className="btn w-full my-8">
          Google Login
        </div>

        <h3>User Info who log in now</h3>
        <h1>{user?.displayName}</h1>
      </div>
    </div>
  );
};

export default LoginForm;
