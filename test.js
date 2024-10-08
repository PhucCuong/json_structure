const json = [
    {
        location: 'Đà Nẵng',
        Hotels: [
            {
                name: 'Furama Resort',
                total_rooms: 10,
                price: '100$',
                available_room: 2,
            },
            {
                name: 'DLG Hotel',
                total_rooms: 20,
                price: '300$',
                available_room: 4,
            },
            {
                name: 'Pullman Da Nang Beach Resort',
                total_rooms: 50,
                price: '550$',
                available_room: 22,
            },
        ],
        restaurant: [
            {
                name: 'Citron Restaurant',
                total_tables: 100,
                available_table: 50,
                foods : [
                    {
                        name: 'Súp hải sản',
                        price: '10$'
                    },
                    {
                        name: 'Salad hoàng đế',
                        price: '2$'
                    },
                    {
                        name: 'Nem nướng',
                        price: '8$'
                    },
                    {
                        name: 'Tôm càng nướng mọi',
                        price: '10$'
                    },
                ]
            },
            {
                name: 'Memory Lounge',
                total_tables: 80,
                available_table: 10,
                foods : [
                    {
                        name: 'Bò lagu kèm bánh mì',
                        price: '11$'
                    },
                    {
                        name: 'Trái cây',
                        price: '4$'
                    },
                    {
                        name: 'Salad rau củ quả',
                        price: '3$'
                    },
                    {
                        name: 'Súp bào ngư',
                        price: '18$'
                    },
                ]
            },
            {
                name: 'À la Mer',
                total_tables: 40,
                available_table: 14,
                foods : [
                    {
                        name: 'Bò úc áp chảo và măng tây',
                        price: '90$'
                    },
                    {
                        name: 'Tôm càng rang muối',
                        price: '24$'
                    },
                    {
                        name: 'Chè thái',
                        price: '8$'
                    },
                    {
                        name: 'Gỏi mực Thái Lan',
                        price: '13$'
                    },
                ]
            },
        ],
        coffee_shop: [
            {
                name: 'Dreamer',
                total_tables: 40,
                available_table: 32,
                drinks: [
                    {
                        name: 'café cốt dừa',
                        price: '2$'
                    },
                    {
                        name: 'café trứng',
                        price: '3$'
                    },
                    {
                        name: 'café espresso',
                        price: '4$'
                    },
                ],
            },
            {
                name: 'The Third House',
                total_tables: 55,
                available_table: 22,
                drinks: [
                    {
                        name: 'cappuchino',
                        price: '2$'
                    },
                    {
                        name: 'latte',
                        price: '3$'
                    },
                    {
                        name: 'Cookies',
                        price: '4$'
                    },
                ],
            },
            {
                name: 'Ibasho Coffee Đà Nẵng',
                total_tables: 20,
                available_table: 4,
                drinks: [
                    {
                        name: 'Mocha',
                        price: '2$'
                    },
                    {
                        name: 'Vanilla',
                        price: '3$'
                    },
                    {
                        name: 'blue ocean',
                        price: '4$'
                    },
                ],
            },
        ],
    },


    // địa điểm thứ 2 (copy lại tượng trưng)
    {
        location: 'Đà Nẵng',
        Hotels: [
            {
                name: 'Furama Resort',
                total_rooms: 10,
                price: '100$',
                available_room: 2,
            },
            {
                name: 'DLG Hotel',
                total_rooms: 20,
                price: '300$',
                available_room: 4,
            },
            {
                name: 'Pullman Da Nang Beach Resort',
                total_rooms: 50,
                price: '550$',
                available_room: 22,
            },
        ],
        restaurant: [
            {
                name: 'Citron Restaurant',
                total_tables: 100,
                available_table: 50,
                foods : [
                    {
                        name: 'Súp hải sản',
                        price: '10$'
                    },
                    {
                        name: 'Salad hoàng đế',
                        price: '2$'
                    },
                    {
                        name: 'Nem nướng',
                        price: '8$'
                    },
                    {
                        name: 'Tôm càng nướng mọi',
                        price: '10$'
                    },
                ]
            },
            {
                name: 'Memory Lounge',
                total_tables: 80,
                available_table: 10,
                foods : [
                    {
                        name: 'Bò lagu kèm bánh mì',
                        price: '11$'
                    },
                    {
                        name: 'Trái cây',
                        price: '4$'
                    },
                    {
                        name: 'Salad rau củ quả',
                        price: '3$'
                    },
                    {
                        name: 'Súp bào ngư',
                        price: '18$'
                    },
                ]
            },
            {
                name: 'À la Mer',
                total_tables: 40,
                available_table: 14,
                foods : [
                    {
                        name: 'Bò úc áp chảo và măng tây',
                        price: '90$'
                    },
                    {
                        name: 'Tôm càng rang muối',
                        price: '24$'
                    },
                    {
                        name: 'Chè thái',
                        price: '8$'
                    },
                    {
                        name: 'Gỏi mực Thái Lan',
                        price: '13$'
                    },
                ]
            },
        ],
        coffee_shop: [
            {
                name: 'Dreamer',
                total_tables: 40,
                available_table: 32,
                drinks: [
                    {
                        name: 'café cốt dừa',
                        price: '2$'
                    },
                    {
                        name: 'café trứng',
                        price: '3$'
                    },
                    {
                        name: 'café espresso',
                        price: '4$'
                    },
                ],
            },
            {
                name: 'The Third House',
                total_tables: 55,
                available_table: 22,
                drinks: [
                    {
                        name: 'cappuchino',
                        price: '2$'
                    },
                    {
                        name: 'latte',
                        price: '3$'
                    },
                    {
                        name: 'Cookies',
                        price: '4$'
                    },
                ],
            },
            {
                name: 'Ibasho Coffee Đà Nẵng',
                total_tables: 20,
                available_table: 4,
                drinks: [
                    {
                        name: 'Mocha',
                        price: '2$'
                    },
                    {
                        name: 'Vanilla',
                        price: '3$'
                    },
                    {
                        name: 'blue ocean',
                        price: '4$'
                    },
                ],
            },
        ],
    },
]