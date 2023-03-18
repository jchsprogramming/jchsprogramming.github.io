Public Class Form1

    Public sus As Integer = 0
    Public drone As Integer = 0
    Public books As Integer = 0
    Public bob As Integer = 0
    Public elpro As Integer = 0
    Public laptop As Integer = 0
    Public balance As Long = 0
    Public level As Integer = 1
    Public upgrade As Integer = 10
    Public add As Integer = 0

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click

        balance = balance + level
        Label1.Text = balance

    End Sub

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

        Label1.Text = balance
        Label2.Text = level
        Label3.Text = upgrade
        Label4.Visible = False

    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click

        If (balance < upgrade) Then
            Timer1.Enabled = True
            Label4.Visible = True
        End If

        If (balance >= upgrade) Then

            add = add + 1
            balance = balance - upgrade
            level = level + add + 1

            Label1.Text = balance
            Label2.Text = level

            upgrade = (upgrade + add) * 2

            Label3.Text = upgrade

        End If

    End Sub

    Private Sub Timer1_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Timer1.Tick

        Label4.Visible = False

    End Sub

    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click

        Form2.Show()
        Me.Hide()

    End Sub

    Private Sub Button4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button4.Click

        Form3.Show()
        Me.Hide()
    End Sub
End Class
