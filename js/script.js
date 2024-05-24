document.addEventListener('DOMContentLoaded', function() {
    const deviceTypeSelect = document.getElementById('deviceType');
    const modelSelect = document.getElementById('model');
    const issueSelect = document.getElementById('issue');
    const priceSpan = document.getElementById('price');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links li a');

    const issues = {
        'iphone': [{
                value: "screen_replacement_aftermarket",
                label: "Screen Replacement (Aftermarket)"
            },
            {
                value: "screen_replacement_premium",
                label: "Screen Replacement (Premium)"
            },
            {
                value: "battery_replacement",
                label: "Battery Replacement"
            },
            {
                value: "charging_port_service",
                label: "Charging Port Service"
            },
            {
                value: "front_camera",
                label: "Front Camera"
            },
            {
                value: "rear_camera",
                label: "Rear/Main Camera"
            },
            {
                value: "camera_lens",
                label: "Camera Lens"
            },
            {
                value: "housing_replacement",
                label: "Housing Replacement"
            }
        ],
        'samsung_s': [{
                value: "screen_replacement",
                label: "Screen Replacement (Original)"
            },
            {
                value: "battery_replacement",
                label: "Battery Replacement"
            },
            {
                value: "charging_port_replacement",
                label: "Charging Port Replacement"
            },
            {
                value: "charging_port_service",
                label: "Charging Port Service"
            },
            {
                value: "front_camera",
                label: "Front Camera"
            },
            {
                value: "rear_camera",
                label: "Rear/Main Camera"
            },
            {
                value: "back_glass_replacement",
                label: "Back Glass Replacement"
            }
        ],
        'samsung_a': [{
                value: "screen_replacement",
                label: "Screen Replacement (Original)"
            },
            {
                value: "battery_replacement",
                label: "Battery Replacement"
            },
            {
                value: "charging_port_replacement",
                label: "Charging Port Replacement"
            },
            {
                value: "charging_port_service",
                label: "Charging Port Service"
            },
            {
                value: "front_camera",
                label: "Front Camera"
            },
            {
                value: "rear_camera",
                label: "Rear/Main Camera"
            },
            {
                value: "back_glass_replacement",
                label: "Back Glass Replacement"
            }
        ],
        'samsung_note': [{
                value: "screen_replacement",
                label: "Screen Replacement (Original)"
            },
            {
                value: "battery_replacement",
                label: "Battery Replacement"
            },
            {
                value: "charging_port_replacement",
                label: "Charging Port Replacement"
            },
            {
                value: "charging_port_service",
                label: "Charging Port Service"
            },
            {
                value: "front_camera",
                label: "Front Camera"
            },
            {
                value: "rear_camera",
                label: "Rear/Main Camera"
            },
            {
                value: "back_glass_replacement",
                label: "Back Glass Replacement"
            }
        ],
        'pixel': [{
                value: "screen_replacement",
                label: "Screen Replacement"
            },
            {
                value: "charging_port_service",
                label: "Charging Port Service"
            }
        ],
        'ipad': [{
                value: "screen_replacement",
                label: "Screen Replacement"
            },
            {
                value: "lcd_replacement",
                label: "LCD Replacement"
            }
        ],
    };

    const prices = {
        'iphone': {
            'iphone_8': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_se': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_x': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_xs': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_xr': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_xs_max': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_11': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_11_pro': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_11_pro_max': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_12': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_12_pro': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_12_pro_max': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_13': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_13_mini': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_13_pro': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_13_pro_max': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_14': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_14_plus': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_14_pro': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            },
            'iphone_14_pro_max': {
                'screen_replacement_aftermarket': 200,
                'screen_replacement_premium': 100,
                'battery_replacement': 100,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'camera_lens': 150,
                'housing_replacement': 150
            }
        },
        'samsung_s': {
            'samsung_s10e': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s10': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s10_plus': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s20': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s20_plus': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s20_fe': {
                'screen_replacement': 250,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s20_ultra': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s21': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s21_fe': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s21_plus': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s21_ultra': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s22': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s22_plus': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s22_ultra': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s23': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s23_fe': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s23_plus': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_s23_ultra': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            }
        },
        'samsung_a': {
            'samsung_a11': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a12': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a13_4g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a13_5g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a14_4g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a14_5g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a15': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a20': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a21': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a21s': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a22_4g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a22_5g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a23': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a30': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a30s': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a31': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a32_4g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a32_5g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a33_5g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a40': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a42': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a50': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a50s': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a51_4g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a51_5g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a52': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a52s': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a52_5g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a53_5g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a54_5g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a70': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a71_4g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a71_5g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a72_4g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_a72_5g': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            }
        },
        'samsung_note': {
            'samsung_note_8': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_note_9': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_note_10': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_note_10_plus': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_note_20': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            },
            'samsung_note_20_ultra': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'charging_port_replacement': 150,
                'charging_port_service': 150,
                'front_camera': 150,
                'rear_camera': 150,
                'back_glass_replacement': 100
            }
        },
        'pixel': {
            'pixel_3': {
                'screen_replacement': 180,
                'charging_port_service': 90
            },
            'pixel_3a': {
                'screen_replacement': 200,
                'charging_port_service': 90
            },
            'pixel_4': {
                'screen_replacement': 180,
                'charging_port_service': 90
            },
            'pixel_4a': {
                'screen_replacement': 200,
                'charging_port_service': 90
            },
            'pixel_5': {
                'screen_replacement': 180,
                'charging_port_service': 90
            },
            'pixel_6_pro': {
                'screen_replacement': 200,
                'charging_port_service': 90
            },
            'pixel_6': {
                'screen_replacement': 180,
                'charging_port_service': 90
            },
            'pixel_6a': {
                'screen_replacement': 200,
                'charging_port_service': 90
            },
            'pixel_7_pro': {
                'screen_replacement': 180,
                'charging_port_service': 90
            },
            'pixel_7': {
                'screen_replacement': 200,
                'charging_port_service': 90
            },
            'pixel_7a': {
                'screen_replacement': 180,
                'charging_port_service': 90
            },
            'pixel_8': {
                'screen_replacement': 200,
                'charging_port_service': 90
            },
            'pixel_8_pro': {
                'screen_replacement': 180,
                'charging_port_service': 90
            }
        },
        'ipad': {
            'ipad_5': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'ipad_6': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'ipad_7': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'ipad_8': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'ipad_9': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'ipad_10': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'mini_4': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'mini_5': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'mini_6': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'air_1': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'air_2': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'air_3': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'air_4': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'air_5_2022': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'pro_9.7': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'pro_10.5': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'pro_11_1st_gen_2018': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'pro_11_2nd_gen_2020': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'pro_11_3rd_gen': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'pro_12.9_2015': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'pro_12.9_2018': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'pro_12.9_2020': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'pro_12.9_2021': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            },
            'pro_12.9_2022': {
                'screen_replacement': 180,
                'lcd_replacement': 90
            }
        }
    };

    function populateIssues(deviceType) {
        issueSelect.innerHTML = '<option value="">Select an issue...</option>';
        const deviceIssues = issues[deviceType] || [];
        deviceIssues.forEach(issue => {
            const option = document.createElement('option');
            option.value = issue.value;
            option.textContent = issue.label;
            issueSelect.appendChild(option);
        });
    }

    function updateModelOptions(deviceType) {
        modelSelect.innerHTML = '<option value="">Select a model...</option>';
        const deviceModels = Object.keys(prices[deviceType] || {});
        deviceModels.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = formatModelName(model);
            modelSelect.appendChild(option);
        });
    }
	
	function formatModelName(model) {
		// Define exceptions for specific models
		const exceptions = {
			'iphone': 'iPhone',
			'ipad': 'iPad',
			'se': 'SE',
			'xs': 'XS',
			'max': 'MAX',
			'xr': 'XR',
			'fe': 'FE'
		};

		// Replace underscores with spaces and capitalize each word
		const formattedModel = model.replace(/_/g, ' ').replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());

		// Apply exceptions
		const words = formattedModel.split(' ');
		for (let i = 0; i < words.length; i++) {
			const word = words[i].toLowerCase();
			if (exceptions[word]) {
				words[i] = exceptions[word];
			}
		}

		return words.join(' ');
	}

    function updatePrice() {
        const selectedDeviceType = deviceTypeSelect.value;
        const selectedModel = modelSelect.value;
        const selectedIssue = issueSelect.value;

        if (selectedDeviceType && selectedModel && selectedIssue) {
            const price = prices[selectedDeviceType][selectedModel][selectedIssue];
            priceSpan.textContent = `$${price}`;
        } else {
            priceSpan.textContent = '';
        }
    }

    deviceTypeSelect.addEventListener('change', () => {
        const selectedDeviceType = deviceTypeSelect.value;
        populateIssues(selectedDeviceType);
        updateModelOptions(selectedDeviceType);
        updatePrice();
    });

    modelSelect.addEventListener('change', updatePrice);
    issueSelect.addEventListener('change', updatePrice);

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
