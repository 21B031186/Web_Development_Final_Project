from rest_framework.response import Response
from rest_framework.decorators import api_view
from accounts.models import User

from accounts.serializers import RegistrationSerializer


@api_view(['POST', ])
def registration_view(request):
    data = {}
    email = request.data.get('email', '0').lower()
    if validate_email(email) != None:
        data['error_message'] = 'That email is already in use.'
        data['response'] = 'Error'
        return Response(data)

    username = request.data.get('username', '0')
    if validate_username(username) != None:
        data['error_message'] = 'That username is already in use.'
        data['response'] = 'Error'
        return Response(data)

    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            account = serializer.save()
            data['response'] = "successfully registered a new user."
            data['email'] = account.email
            data['username'] = account.username
        else:
            data = serializer.errors
        return Response(data)


def validate_email(email):
    account = None
    try:
        account = User.objects.get(email=email)
    except User.DoesNotExist:
        return None
    if account != None:
        return email


def validate_username(username):
    account = None
    try:
        account = User.objects.get(username=username)
    except User.DoesNotExist:
        return None
    if account != None:
        return username


# class ObtainAuthTokenView(APIView):
#     authentication_classes = [authentication.TokenAuthentication]
#     serializer_class = CustomTokenSerializer
#
#     def post(self, request):
#         context = {}
#         email = request.data['username']
#         password = request.data['password']
#         account = authenticate(email=email, password=password)
#
#         if account:
#             try:
#                 token = Token.objects.get(user=account)
#             except Token.DoesNotExist:
#                 token = Token.objects.create(user=account)
#             context['response'] = 'Successfully authenticated.'
#             context['pk'] = account.pk
#             context['email'] = email.lower()
#             context['token'] = token.key
#         else:
#             context['response'] = 'Error'
#             context['error_message'] = 'Invalid credentials'
#
#         return Response(context['token'])

# class CustomObtainAuthToken(ObtainAuthToken):
#     serializer_class = CustomTokenSerializer

    # def post(self, request, *args, **kwargs):
    #     response = super().post(request, *args, **kwargs)
    #     token = response.data['token']
    #     return Response({'token': token})