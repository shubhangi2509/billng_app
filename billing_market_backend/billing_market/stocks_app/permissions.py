from rest_framework import permissions


class ManagerOrStaffPermissions(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return bool(True)
        return bool(request.user and request.user.is_authenticated and request.user.designation in ['Manager', 'Staff'])
    

class TaskCompletionPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return bool(True)
        #print(bool(request.user and request.user.is_authenticated))
        return bool(request.user and request.user.is_authenticated) 

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return bool(True)
        return bool(request.user == obj.task_assigned_to)
        