from rest_framework import permissions


class EmployeeRegistrationPermissions(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return bool(True)
        return bool(request.user and request.user.is_authenticated and request.user.user_role == 'CEO')
    