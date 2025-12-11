"use strict";

(function () {
    const countries = [
        {
            countryName: "Россия",
            citiesList: [
                {
                    cityName: "Москва",
                    population: 12636312
                },
                {
                    cityName: "Новосибирск",
                    population: 1621500
                },
                {
                    cityName: "Санкт-Петербург",
                    population: 5652922
                },
                {
                    cityName: "Томск",
                    population: 556478
                },
                {
                    cityName: "Омск",
                    population: 1101367
                }
            ]
        },
        {
            countryName: "Китай",
            citiesList: [
                {
                    cityName: "Пекин",
                    population: 21705145
                },
                {
                    cityName: "Санья",
                    population: 685476
                }
            ]
        },

        {
            countryName: "Индия",
            citiesList: [
                {
                    cityName: "Дели",
                    population: 11007835
                },
                {
                    cityName: "Варанаси",
                    population: 1198491
                },
                {
                    cityName: "Мумбаи",
                    population: 12422373
                }
            ]
        },
        {
            countryName: "Вьетнам",
            citiesList: [
                {
                    cityName: "Хошимин",
                    population: 8993082
                },
                {
                    cityName: "Ханой",
                    population: 6448837
                },
                {
                    cityName: "Нячанг",
                    population: 420521
                },
                {
                    cityName: "Хойан",
                    population: 121716
                },
                {
                    cityName: "Далат",
                    population: 406105
                }
            ]
        },
        {
            countryName: "Куба",
            citiesList: [
                {
                    cityName: "Гавана",
                    population: 2125977
                }
            ]
        }
    ];

    console.log("Страна/страны с максимальным количеством городов: ");
    console.log(countries.filter(country =>
        country.citiesList.length === countries.reduce(
            (citiesMaxCount, currentCountry) =>
                Math.max(citiesMaxCount, currentCountry.citiesList.length), 0)));

    const countriesPopulation = {};

    countries.forEach(country =>
        countriesPopulation[country.countryName] = country.citiesList.reduce((sumPopulation, currentCity) =>
            sumPopulation + currentCity.population, 0));

    console.log("Суммарная численность по странам: ");
    console.log(countriesPopulation);
}());