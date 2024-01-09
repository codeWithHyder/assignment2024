    // get all list menu items 
       
       let listItems = document.querySelectorAll('.list-menu > li >a');

        listItems.forEach((item) => {
            item.addEventListener('click', () => {
                listItems.forEach((listItem) => {
                    if (listItem !== item) {
                        listItem.classList.remove('clicked');
                    }
                });
                item.classList.toggle('clicked');
            });
        });
                // Get the canvas element
        const ctx = document.getElementById('myChart').getContext('2d');

        // Create the chart
        const myChart = new Chart(ctx, {
            type: 'bar', // Type of chart (e.g., bar, line, pie, etc.)
            data: {
                labels: ['20', '25', '30', '35', '40', '60', '65'],
                datasets: [{
                    label: '# of Votes',
                    data: [20,25,30,36,40,45,60,65],
                    backgroundColor: [
                        'blue',
                        'blue',
                        'blue',
                        'blue',
                        'blue',
                        'blue'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 0.5
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    