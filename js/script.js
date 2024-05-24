document.addEventListener('DOMContentLoaded', function () {
    const deviceTypeSelect = document.getElementById('deviceType');
    const modelSelect = document.getElementById('model');
    const issueSelect = document.getElementById('issue');
    const priceSpan = document.getElementById('price');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links li a');

    const prices = {
        'iphone': {
            'iphone_11': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'water_damage': 150
            },
            'iphone_12': {
                'screen_replacement': 220,
                'battery_replacement': 110,
                'water_damage': 160
            }
        },
        'samsung': {
            'samsung_s20': {
                'screen_replacement': 180,
                'battery_replacement': 90,
                'water_damage': 140
            },
            'samsung_s21': {
                'screen_replacement': 200,
                'battery_replacement': 100,
                'water_damage': 150
            }
        }
        // Add more device types and their corresponding models, issues, and prices as needed
    };

    function updateModelOptions() {
        const selectedDeviceType = deviceTypeSelect.value;
        modelSelect.innerHTML = '<option value="">Select a model</option>';

        if (prices[selectedDeviceType]) {
            for (const model in prices[selectedDeviceType]) {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model.replace('_', ' ').toUpperCase();
                modelSelect.appendChild(option);
            }
        }
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
        updateModelOptions();
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