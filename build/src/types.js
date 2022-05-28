"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = exports.HealthCheckRating = void 0;
var HealthCheckRating;
(function (HealthCheckRating) {
    HealthCheckRating[HealthCheckRating["Healthy"] = 1] = "Healthy";
    HealthCheckRating[HealthCheckRating["LowRisk"] = 2] = "LowRisk";
    HealthCheckRating[HealthCheckRating["HighRisk"] = 3] = "HighRisk";
    HealthCheckRating[HealthCheckRating["CriticalRisk"] = 4] = "CriticalRisk";
})(HealthCheckRating = exports.HealthCheckRating || (exports.HealthCheckRating = {}));
var Gender;
(function (Gender) {
    Gender["Other"] = "other";
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender = exports.Gender || (exports.Gender = {}));
