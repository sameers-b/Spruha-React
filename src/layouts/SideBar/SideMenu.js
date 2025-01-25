export const MENUITEMS = [
	{
		menutitle: 'DASHBOARD',
		Items: [
			{
				path: `${process.env.PUBLIC_URL}/dashboard`,
				icon: 'ti-home',
				type: 'link',
				active: false,
				selected: false,
				title: 'Dashboard'
			},
			{
				title: 'CryptoCurrencies',
				icon: 'ti-wallet',
				type: 'sub',
				active: false,
				selected: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/crytocurrencies/dashboard`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Dashboard'
					},
					{
						path: `${process.env.PUBLIC_URL}/crytocurrencies/market`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Marketcap'
					},
					{
						path: `${process.env.PUBLIC_URL}/crytocurrencies/currencyechange`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Currency exchange'
					},
					{
						path: `${process.env.PUBLIC_URL}/crytocurrencies/buysell`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Buy & Sell'
					},
					{
						path: `${process.env.PUBLIC_URL}/crytocurrencies/wallet`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Wallet'
					},
					{
						path: `${process.env.PUBLIC_URL}/crytocurrencies/transcations`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Transcations'
					}
				]
			},
			{
				title: 'ECommerce',
				icon: 'ti-shopping-cart-full',
				type: 'sub',
				active: false,
				selected: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/ecommerce/ecdashboard`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Dashboard'
					},
					{
						path: `${process.env.PUBLIC_URL}/ecommerce/products`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Products'
					},
					{
						path: `${process.env.PUBLIC_URL}/ecommerce/productdeatils`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Product Details'
					},
					{
						path: `${process.env.PUBLIC_URL}/ecommerce/eccart`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Cart'
					},
					{
						path: `${process.env.PUBLIC_URL}/ecommerce/wishlist`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Wishlist'
					},
					{
						path: `${process.env.PUBLIC_URL}/ecommerce/cheackout`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Checkout'
					},
					{
						path: `${process.env.PUBLIC_URL}/ecommerce/order`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Orders'
					},
					{
						path: `${process.env.PUBLIC_URL}/ecommerce/addproduct`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Add Product'
					},
					{
						path: `${process.env.PUBLIC_URL}/ecommerce/account`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Account'
					}
				]
			}
		]
	},
	{
		menutitle: 'LANDINGPAGE',
		Items: [
			{
				path: `${process.env.PUBLIC_URL}/landingpage`,
				icon: 'ti-layout',
				type: 'link',
				active: false,
				selected: false,
				title: 'Landingpage'
			}
		]
	},
	{
		menutitle: 'APPILICATION',
		Items: [
			{
				title: 'Apps',
				icon: 'ti-write',
				type: 'sub',
				active: false,
				selected: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/apps/widgets`,
						icon: 'ti-server',
						type: 'link',
						active: false,
						selected: false,
						title: 'Widgets'
					},
					{
						title: 'Mail',
						icon: 'ti-email',
						type: 'sub',
						active: false,
						selected: false,
						children: [
							{
								path: `${process.env.PUBLIC_URL}/apps/mail/mailinbox`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Mail-Inbox',
							},
							{
								path: `${process.env.PUBLIC_URL}/apps/mail/viewmail`,
								type: 'link',
								active: false,
								selected: false,
								title: 'View-Mail ',
							},
							{
								path: `${process.env.PUBLIC_URL}/apps/mail/mailcomposed`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Mail-Composed ',
							}
						]
					},
					{
						title: 'Maps',
						type: 'sub',
						active: false,
						selected: false,
						children: [
							{
								path: `${process.env.PUBLIC_URL}/apps/maps/leafletsmaps`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Leaflet Maps'
							},
							{
								path: `${process.env.PUBLIC_URL}/apps/maps/rsmmaps`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Rsm Maps'
							}
						]
					},
					{
						title: 'Tables',
						icon: 'ti-agenda',
						type: 'sub',
						active: false,
						selected: false,
						children: [
							{
								path: `${process.env.PUBLIC_URL}/apps/table/reactbasictables`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Basic Tables'
							},
							{
								path: `${process.env.PUBLIC_URL}/apps/table/reactdatatables`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Data Tables'
							}
						]
					},
					{
						title: 'Blog',
						icon: 'ti-agenda',
						type: 'sub',
						active: false,
						selected: false,
						children: [
							{
								path: `${process.env.PUBLIC_URL}/apps/blog/blog`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Blog'
							},
							{
								path: `${process.env.PUBLIC_URL}/apps/blog/blogdetails`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Blog-details'
							},
							{
								path: `${process.env.PUBLIC_URL}/apps/blog/blogpost`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Blog-post'
							}
						]
					},
					{
						title: 'File Manager',
						icon: 'ti-agenda',
						type: 'sub',
						active: false,
						selected: false,
						children: [
							{
								path: `${process.env.PUBLIC_URL}/apps/file/filemanger`,
								type: 'link',
								active: false,
								selected: false,
								title: 'File-manager'
							},
							{
								path: `${process.env.PUBLIC_URL}/apps/file/filemangerlist`,
								type: 'link',
								active: false,
								selected: false,
								title: 'File-manager-list'
							},
							{
								path: `${process.env.PUBLIC_URL}/apps/file/filedetails`,
								type: 'link',
								active: false,
								selected: false,
								title: 'File-details'
							},
							{
								path: `${process.env.PUBLIC_URL}/apps/file/fileattachements`,
								type: 'link',
								active: false,
								selected: false,
								title: 'FileAttachements'
							}
						]
					},
					{
						title: 'Icons',
						icon: 'ti-agenda',
						type: 'sub',
						active: false,
						selected: false,
						children: [
							{
								path: `${process.env.PUBLIC_URL}/icons/fontawesome`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Font Awesome'
							},
							{
								path: `${process.env.PUBLIC_URL}/icons/materialdesignicons`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Material Design icons'
							},
							{
								path: `${process.env.PUBLIC_URL}/icons/simplelineicons`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Simple Line icons'
							},
							{
								path: `${process.env.PUBLIC_URL}/icons/feathericons`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Feather icons'
							},
							{
								path: `${process.env.PUBLIC_URL}/icons/ionicicons`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Ionic icons'
							},
							{
								path: `${process.env.PUBLIC_URL}/icons/flagsicons`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Flags icons'
							},
							{
								path: `${process.env.PUBLIC_URL}/icons/pe7icons`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Pe7 icons'
							},
							{
								path: `${process.env.PUBLIC_URL}/icons/themifyicons`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Themify icons'
							},
							{
								path: `${process.env.PUBLIC_URL}/icons/typiconsicons`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Typicons icons'
							},
							{
								path: `${process.env.PUBLIC_URL}/icons/weathericons`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Weather icons'
							},
							{
								path: `${process.env.PUBLIC_URL}/icons/materialicons`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Material icons'
							},
							{
								path: `${process.env.PUBLIC_URL}/icons/bootsrapicons`,
								type: 'link',
								active: false,
								selected: false,
								title: 'Bootstrap icons'
							}
						]
					}
				]
			}
		]
	},

	{
		menutitle: 'COMPONENTS',
		Items: [
			{
				title: 'Elements',
				icon: 'ti-package',
				type: 'sub',
				active: false,
				selected: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/elements/alerts`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Alerts'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/accordions`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Accordion'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/avatars`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Avatar'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/breadcrumbs`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Breadcrumbs'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/buttons`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Buttons'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/badges`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Badge'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/dropdown`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Dropdown'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/thumbnails`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Thumbnails'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/listgroups`,
						type: 'link',
						active: false,
						selected: false,
						title: 'List Group'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/navigation`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Navigation'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/paginations`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Pagination'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/popovers`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Popover'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/progress`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Progress'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/spinner`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Spinners'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/mediaobjects`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Media Object'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/typographys`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Typography'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/tooltips`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Tooltip'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/tabs`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Tabs'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/toasts`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Toast'
					},
					{
						path: `${process.env.PUBLIC_URL}/elements/tags`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Tags'
					},

				]
			},
			{
				title: 'AdvancedUI',
				icon: 'ti-briefcase',
				type: 'sub',
				active: false,
				selected: false,
				children: [

					{
						path: `${process.env.PUBLIC_URL}/advanceUI/chat`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Chat'
					},
					{
						path: `${process.env.PUBLIC_URL}/advanceUI/cards`,
						type: 'link',
						active: false,
						selected: false,
						title: 'cards'
					},
					{
						path: `${process.env.PUBLIC_URL}/advanceUI/calendar`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Calendar'
					},
					{
						path: `${process.env.PUBLIC_URL}/advanceUI/contacts`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Contacts'
					},

					{
						path: `${process.env.PUBLIC_URL}/advanceUI/carousels`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Carousel'
					},
					{
						path: `${process.env.PUBLIC_URL}/advanceUI/collapse`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Collapse'
					},
					{
						path: `${process.env.PUBLIC_URL}/advanceUI/modals`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Modals'
					},
					{
						path: `${process.env.PUBLIC_URL}/advanceUI/timeline`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Timeline'
					},

					{
						path: `${process.env.PUBLIC_URL}/advanceUI/sweetalert`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Sweet Alert'
					},
					{
						path: `${process.env.PUBLIC_URL}/advanceUI/rating`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Ratings'
					},
					{
						path: `${process.env.PUBLIC_URL}/advanceUI/search`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Search'
					},
					{
						path: `${process.env.PUBLIC_URL}/advanceUI/userlist`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Userlist'
					},
					{
						path: `${process.env.PUBLIC_URL}/advanceUI/notifications`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Notification'
					},
					{
						path: `${process.env.PUBLIC_URL}/advanceUI/treeview`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Tree-view'
					}
				]
			}
		]
	},

	{
		menutitle: 'OTHER PAGES',
		Items: [
			{
				title: 'Pages',
				icon: 'ti-palette',
				type: 'sub',
				menutitle: '',
				active: false,
				selected: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/pages/profile`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Profile'
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/aboutus`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Aboutus'
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/notificationlist`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Notificationlist'
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/settings`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Settings'
					},

					{
						path: `${process.env.PUBLIC_URL}/pages/invoice`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Invoice'
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/faq`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Faqs'
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/pricingtable`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Pricing'
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/gallery`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Gallery'
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/messagesuccess`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Success Message'
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/messagedanger`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Danger Message'
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/messagewarning`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Warning Message'
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/emptypage`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Empty Page'
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/switcherpages`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Switcher Page'
					}
				]
			},

			{
				title: 'Utilities',
				icon: 'ti-shield',
				type: 'sub',
				children: [
					{
						path: `${process.env.PUBLIC_URL}/utilities/background`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Background'
					},
					{
						path: `${process.env.PUBLIC_URL}/utilities/border`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Border'
					},
					{
						path: `${process.env.PUBLIC_URL}/utilities/display`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Display'
					},
					{
						path: `${process.env.PUBLIC_URL}/utilities/flex`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Flex'
					},
					{
						path: `${process.env.PUBLIC_URL}/utilities/height`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Height'
					},
					{
						path: `${process.env.PUBLIC_URL}/utilities/margin`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Margin'
					},
					{
						path: `${process.env.PUBLIC_URL}/utilities/padding`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Padding'
					},
					{
						path: `${process.env.PUBLIC_URL}/utilities/position`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Position'
					},
					{
						path: `${process.env.PUBLIC_URL}/utilities/width`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Width'
					},
					{
						path: `${process.env.PUBLIC_URL}/utilities/extras`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Extras'
					}
				]
			},
			{
				title: 'Authentication',
				icon: 'ti-lock',
				type: 'sub',
				children: [
					{
						path: `${process.env.PUBLIC_URL}/custompages/signin`,
						type: 'link',
						active: false,
						selected: false,
						title: ' Sign In'
					},
					{
						path: `${process.env.PUBLIC_URL}/custompages/signup`,
						type: 'link',
						active: false,
						selected: false,
						title: ' Sign Up'
					},
					{
						path: `${process.env.PUBLIC_URL}/custompages/forgotpassword`,
						type: 'link',
						active: false,
						selected: false,
						title: ' Forgot Password'
					},
					{
						path: `${process.env.PUBLIC_URL}/custompages/resetpassword`,
						type: 'link',
						active: false,
						selected: false,
						title: ' Reset Password'
					},
					{
						path: `${process.env.PUBLIC_URL}/custompages/underConstruction`,
						type: 'link',
						active: false,
						selected: false,
						title: ' UnderConstruction'
					},
					{
						path: `${process.env.PUBLIC_URL}/custompages/lockscreen`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Lockscreen'
					},
					{
						path: `${process.env.PUBLIC_URL}/custompages/error404`,
						type: 'link',
						active: false,
						selected: false,
						title: ' Error404'
					},
					{
						path: `${process.env.PUBLIC_URL}/custompages/error505`,
						type: 'link',
						active: false,
						selected: false,
						title: ' Error505'
					}
				]
			}
		]
	},
	{
		menutitle: 'FORMS & CHARTS',
		Items: [
			{
				title: 'Forms',
				icon: 'ti-receipt',
				type: 'sub',
				badge: 'badge bg-info side-badge',
				badgetxt: '7',
				background: "hor-rightangle",
				active: false,
				selected: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/forms/formelements`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Form Elements'
					},
					{
						path: `${process.env.PUBLIC_URL}/forms/advancedforms`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Advanced Forms'
					},
					{
						path: `${process.env.PUBLIC_URL}/forms/formlayout`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Form Layouts'
					},
					{
						path: `${process.env.PUBLIC_URL}/forms/formvalidation`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Form Validation'
					},
					{
						path: `${process.env.PUBLIC_URL}/forms/formwizard`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Form wizards'
					},
					{
						path: `${process.env.PUBLIC_URL}/forms/formeditor`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Form Editor'
					},
					{
						path: `${process.env.PUBLIC_URL}/forms/formelementssizes`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Form Element-sizes'
					}
				]
			},

			{
				title: 'Charts',
				icon: 'ti-bar-chart',
				type: 'sub',
				badge: 'badge bg-danger side-badge',
				badgetxt: '5',
				background: "hor-rightangle",
				badge1: true,
				active: false,
				selected: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/charts/chartjs`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Chartjs'
					},
					{
						path: `${process.env.PUBLIC_URL}/charts/echart`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Echart'
					},
					{
						path: `${process.env.PUBLIC_URL}/charts/nvd3charts`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Nvd3charts'
					},
					{
						path: `${process.env.PUBLIC_URL}/charts/c3barcharts`,
						type: 'link',
						active: false,
						selected: false,
						title: 'C3barcharts'
					},
					{
						path: `${process.env.PUBLIC_URL}/charts/piacharts`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Piacharts'
					}
				]
			}
		]
	}
];
