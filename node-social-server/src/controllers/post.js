"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const services_1 = require("../services");
const request_1 = require("../models/request");
let PostController = class PostController {
    constructor(_db, postService) {
        this._db = _db;
        this.postService = postService;
    }
    like(req, res, next) {
        return this.postService.like(req.params.id, req.user.id);
    }
    comment(req, res, next) {
        let newComment = req.body;
        newComment.userId = req.user.id;
        return this.postService.comment(req.params.id, newComment);
    }
};
__decorate([
    inversify_express_utils_1.Post("/:id/like"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Object)
], PostController.prototype, "like", null);
__decorate([
    inversify_express_utils_1.Post("/:id/comment", utils_1.validateBody(request_1.NewPost)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Object)
], PostController.prototype, "comment", null);
PostController = __decorate([
    inversify_1.injectable(),
    inversify_express_utils_1.Controller("/api/post", utils_1.authorize()),
    __param(0, inversify_1.inject(constants_1.TYPES.IGraphDb)),
    __param(1, inversify_1.inject(constants_1.TYPES.PostService)),
    __metadata("design:paramtypes", [Object, services_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.js.map