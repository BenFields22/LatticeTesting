/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	async rewrites(){
		return [
		{
			source:'/res1only/:path*',
			destination: 'http://backend-1-0bec10a4b68823a52.7d67968.vpc-lattice-svcs.us-west-2.on.aws/res1only:path*'
		},
		{
			source:'/res1and2/:path*',
			destination: 'http://backend-1-0bec10a4b68823a52.7d67968.vpc-lattice-svcs.us-west-2.on.aws/res1and2:path*'
		},
		{
			source:'/res2only/:path*',
			destination: 'http://backend-2-09f96317af092bcd5.7d67968.vpc-lattice-svcs.us-west-2.on.aws/res2only:path*'
		},
		{
			source:'/res2and1/:path*',
			destination: 'http://backend-2-09f96317af092bcd5.7d67968.vpc-lattice-svcs.us-west-2.on.aws/res2and1:path*'
		},
		]
	}
}

module.exports = nextConfig
